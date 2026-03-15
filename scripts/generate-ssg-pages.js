const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const repoRoot = path.resolve(__dirname, '..');
const dataPath = path.join(repoRoot, 'docs', 'data.js');
const outputDir = path.join(repoRoot, 'docs', 'ssg');

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const loadRestaurantData = () => {
  const scriptContent = fs.readFileSync(dataPath, 'utf8');
  const blockedTokens = /\b(require|process|globalThis|Function|eval|import|export)\b/;

  if (blockedTokens.test(scriptContent)) {
    throw new Error('Unexpected executable token found in docs/data.js');
  }

  if (!/const\s+sanminRestaurants\s*=/.test(scriptContent) || !/const\s+minshengRestaurants\s*=/.test(scriptContent)) {
    throw new Error('docs/data.js does not contain expected restaurant declarations');
  }

  const context = {};

  vm.runInNewContext(
    `${scriptContent}\nthis.sanminRestaurants = sanminRestaurants; this.minshengRestaurants = minshengRestaurants;`,
    context,
    { filename: 'data.js' }
  );

  return {
    sanminRestaurants: context.sanminRestaurants,
    minshengRestaurants: context.minshengRestaurants,
  };
};

const renderList = (items) =>
  items
    .map(
      (restaurant) => `      <li class="restaurant-item"><strong>${escapeHtml(restaurant.name)}</strong>｜${escapeHtml(restaurant.type)}｜最低 ${escapeHtml(restaurant.minPrice)} 元</li>`
    )
    .join('\n');

const buildPage = ({ title, description, canonicalUrl, heading, data }) => {
  const allRestaurants = [...data.food, ...data.drinks];
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: heading,
    description,
    numberOfItems: allRestaurants.length,
    itemListElement: allRestaurants.map((restaurant, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'LocalBusiness',
        name: restaurant.name,
        servesCuisine: restaurant.type,
        address: restaurant.location,
      },
    })),
  };

  return `<!doctype html>
<html lang="zh-TW">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      .restaurant-item { margin-bottom: 0.5rem; }
    </style>
    <script type="application/ld+json">${JSON.stringify(itemListSchema)}</script>
  </head>
  <body class="min-h-screen bg-orange-50 text-gray-800 p-6">
    <main class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">${escapeHtml(heading)}</h1>
      <p class="mb-4">${escapeHtml(description)}</p>
      <p class="mb-6 text-sm text-gray-600">這是預先產生（SSG）的店家頁面，供搜尋引擎與生成式搜尋引用。</p>
      <h2 class="text-xl font-semibold mb-3">店家清單（${allRestaurants.length}）</h2>
      <ul class="list-disc pl-6">
${renderList(allRestaurants)}
      </ul>
      <div class="mt-8">
        <a class="text-orange-700 hover:underline" href="../index.html">回到互動版抽籤頁面</a>
      </div>
    </main>
  </body>
</html>`;
};

const main = () => {
  const { sanminRestaurants, minshengRestaurants } = loadRestaurantData();

  fs.mkdirSync(outputDir, { recursive: true });

  const pages = [
    {
      filename: 'sanmin.html',
      title: '中科大三民校區店家清單（SSG）',
      description: '中科大三民校區與一中街的食物、飲料店家清單（靜態產生頁面）。',
      canonicalUrl: 'https://chaworld.github.io/nutc_fd/ssg/sanmin.html',
      heading: '中科大三民校區店家清單',
      data: sanminRestaurants,
    },
    {
      filename: 'minsheng.html',
      title: '中科大民生校區店家清單（SSG）',
      description: '中科大民生校區附近的食物、飲料店家清單（靜態產生頁面）。',
      canonicalUrl: 'https://chaworld.github.io/nutc_fd/ssg/minsheng.html',
      heading: '中科大民生校區店家清單',
      data: minshengRestaurants,
    },
  ];

  pages.forEach((page) => {
    const outputPath = path.join(outputDir, page.filename);
    fs.writeFileSync(outputPath, buildPage(page), 'utf8');
  });

  console.log(`Generated ${pages.length} static pages in docs/ssg`);
};

main();
