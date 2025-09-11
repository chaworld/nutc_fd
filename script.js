// Emoji 的函式
// Emoji 的函式
const getEmojiForType = (type) => {
  const emojis = {
    '火鍋': '🍲', '日式料理': '🍣', '飯食': '🍚', '飯包': '🍱', '滷味': '🥘',
    '牛肉麵': '🍜', '烏龍麵': '🍜', '咖哩': '🍛', '燉飯': '🥘', '炒飯': '🍚',
    '義式料理': '🍝', '早午餐': '🍳', '潛艇堡': '🥪', '速食': '🍔', '拉麵': '🍜','鐵板麵':'🍜',
    '麵食': '🍜', '韓式料理': '🥘', '鐵板燒': '🍳', '飯捲': '🍙', '小吃': '🍢',
    '炸物': '🍗', '壽司': '🍣', '麻辣鴨血': '🌶️', '早餐': '🥞', '燒肉丼飯': '🍚',
    '健康餐盒': '🥗', '義大利麵': '🍝', '手搖飲': '🥤', '咖啡': '☕️', 'default': '🍴'
  };
  return emojis[type] || emojis['default'];
};

// 餐廳資料
const restaurants = {
  food: [
    { name: '金大發', type: '火鍋', minPrice: 130, minPriceItem: '昆布豬肉鍋', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=金大發' },
    { name: '花囍家', type: '日式料理', minPrice: 30, minPriceItem: '玉米沙拉兩貫', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=花囍家' },
    { name: '一中飯飯', type: '飯食', minPrice: 120, minPriceItem: '招牌燒肉飯', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=飯飯 一中' },
    { name: '虎福福飯包', type: '飯包', minPrice: 90, minPriceItem: '香煎雞胸肉飯', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=虎福福飯包' },
    { name: '微滷', type: '滷味', minPrice: 110, minPriceItem: '內用低銷110元', location: '一中街', googleMapsLink: '' },
    { name: '偈亭', type: '火鍋', minPrice: 130, minPriceItem: '烏龍麵', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=偈亭 雙十' },
    { name: '三商巧福', type: '牛肉麵', minPrice: 140, minPriceItem: '牛肉炸醬麵 (小)', location: '一中街', googleMapsLink: '' },
    { name: '莊爸炸雞魯肉飯', type: '飯食', minPrice: 50, minPriceItem: '滷肉飯加蛋', location: '一中街', googleMapsLink: '' },
    { name: '頂吉古早味雞肉飯', type: '飯食', minPrice: 40, minPriceItem: '雞肉飯 (小)', location: '一中街', googleMapsLink: '' },
    { name: '鑫吉野', type: '日式料理', minPrice: 80, minPriceItem: '招牌烤肉飯', location: '一中街', googleMapsLink: '' },
    { name: '丸龜製麵', type: '烏龍麵', minPrice: 74, minPriceItem: '釜揚烏龍麵 (中)', location: '一中街', googleMapsLink: '' },
    { name: '丸勝咖哩', type: '咖哩', minPrice: 200, minPriceItem: '有低銷90，外帶訂單享85折優惠', location: '一中街', googleMapsLink: '' },
    { name: 'JT燉飯', type: '燉飯', minPrice: 200, minPriceItem: '燉飯系列', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=JT燉飯' },
    { name: '二口鐵板麵', type: '鐵板麵', minPrice: 70, minPriceItem: '鐵板麵', location: '一中街', googleMapsLink: '' },
    { name: '亞丁尼 一中', type: '義式料理', minPrice: 178, minPriceItem: '義大利麵(主餐都送飲料)', location: '一中街', googleMapsLink: '' },
    { name: '晨家早午餐 一中', type: '早午餐', minPrice: 45, minPriceItem: '起司蛋餅', location: '一中街', googleMapsLink: '' },
    { name: '艾初早午餐 一中太平', type: '早午餐', minPrice: 40, minPriceItem: '火腿蛋吐司', location: '一中街', googleMapsLink: '' },
    { name: 'SUBWAY 台中三民', type: '潛艇堡', minPrice: 125, minPriceItem: '香烤雞肉', location: '三民路', googleMapsLink: '' },
    { name: '肯德基 台中五權餐廳', type: '速食', minPrice: 200, minPriceItem: '肯德基爺爺', location: '五權路', googleMapsLink: '' },
    { name: '漢堡王 一中', type: '速食', minPrice: 100, minPriceItem: '二樓View很好', location: '一中街', googleMapsLink: '' },
    { name: '振興行', type: '麵食', minPrice: 60, minPriceItem: '醬香乾麵(小)', location: '一中街', googleMapsLink: '' },
    { name: '花月嵐 中友', type: '拉麵', minPrice: 200, minPriceItem: '拉麵', location: '中友百貨', googleMapsLink: '' },
    { name: '山西刀削麵食館', type: '麵食', minPrice: 75, minPriceItem: '大滷麵', location: '一中街', googleMapsLink: '' },
    { name: '小象', type: '麵食', minPrice: 90, minPriceItem: '鳳梨蘋果三明治', location: '一中街', googleMapsLink: '' },
    { name: '元春鐵板燒', type: '鐵板燒', minPrice: 80, minPriceItem: '豬肉鐵板燒(學生證有優惠)', location: '一中街', googleMapsLink: '' },
    { name: '忠午飯捲', type: '飯捲', minPrice: 80, minPriceItem: '飯捲便當', location: '一中街', googleMapsLink: '' },
    { name: '抓 蔥抓餅專賣', type: '小吃', minPrice: 40, minPriceItem: '蔥抓餅加蛋', location: '一中街', googleMapsLink: '' },
    { name: '小紅帽烤肉飯', type: '飯食', minPrice: 60, minPriceItem: '烤肉飯捲', location: '一中街', googleMapsLink: '' },
    { name: '食也', type: '飯食', minPrice: 60, minPriceItem: '炒飯', location: '一中街', googleMapsLink: '' },
    { name: '京厚屋 一中', type: '日式料理', minPrice: 258, minPriceItem: '厚切豬排定食', location: '一中街', googleMapsLink: '' },
    { name: '私肉羹', type: '小吃', minPrice: 70, minPriceItem: '香菇肉羹飯', location: '一中街', googleMapsLink: '' },
    { name: '天使雞排', type: '炸物', minPrice: 100, minPriceItem: '雞排', location: '一中街', googleMapsLink: '' },
    { name: '八兩', type: '炸物', minPrice: 100, minPriceItem: '雞排', location: '一中街', googleMapsLink: '' },
    { name: '鍋湯匯 一中', type: '火鍋', minPrice: 160, minPriceItem: '原味豬肉鍋', location: '一中街', googleMapsLink: '' },
    { name: '麥當勞 三民', type: '速食', minPrice: 66, minPriceItem: '+1元多一件到10/7', location: '三民路', googleMapsLink: '' },
    { name: '爭鮮Plus 中友', type: '壽司', minPrice: 200, minPriceItem: '每盤最低40', location: '中友百貨', googleMapsLink: '' },
    { name: '全方位自助餐', type: '自助餐', minPrice: 50, minPriceItem: '依菜色計價', location: '一中街', googleMapsLink: '' },
    { name: '初心手作壽司 一中', type: '壽司', minPrice: 70, minPriceItem: '海苔壽司(8個)', location: '一中街', googleMapsLink: '' },
    { name: '好犀利麻辣鴨血 愛廣場', type: '麻辣鴨血', minPrice: 80, minPriceItem: '麻辣鴨血', location: '愛廣場', googleMapsLink: '' },
    { name: '阿如早餐', type: '早餐', minPrice: 30, minPriceItem: '原味蛋餅', location: '一中街', googleMapsLink: '' },
    { name: '川牛 一中', type: '燒肉丼飯', minPrice: 200, minPriceItem: '丼飯', location: '一中街', googleMapsLink: '' },
    { name: '里奇 健康餐盒 五義店', type: '健康餐盒', minPrice: 105, minPriceItem: '香煎雞排餐盒', location: '五義街', googleMapsLink: '' },
    { name: 'EAT義大利麵', type: '義大利麵', minPrice: 115, minPriceItem: '義大利麵', location: '一中街', googleMapsLink: '' },
    { name: '愛廣場拉麵', type: '拉麵', minPrice: 200, minPriceItem: '拉麵', location: '愛廣場', googleMapsLink: '' },
    { name: '肉蛋吐司紅茶牛奶', type: '早餐', minPrice: 55, minPriceItem: '肉蛋吐司', location: '一中街', googleMapsLink: '' },
    { name: '月光寶盒', type: '義大利麵', minPrice: 100, minPriceItem: '培根義大利麵', location: '一中街', googleMapsLink: '' },
    { name: '晨元元堡早午餐餃館', type: '早午餐', minPrice: 45, minPriceItem: '起司蛋餅', location: '一中街', googleMapsLink: '' },
    { name: '小倆口章魚燒', type: '小吃', minPrice: 45, minPriceItem: '章魚燒', location: '一中街', googleMapsLink: '' },
    { name: '默金 Pasta 義大利面', type: '義大利麵', minPrice: 160, minPriceItem: '義大利麵', location: '一中街', googleMapsLink: '' },
    { name: '諾諾索 Non Lo So 義式料理一中店', type: '義式料理', minPrice: 169, minPriceItem: '義大利麵', location: '一中街', googleMapsLink: '' },
    { name: 'Gray House Living&Pasta 灰房子 義式料理', type: '義式料理', minPrice: 220, minPriceItem: '義大利麵', location: '一中街', googleMapsLink: '' },
    { name: '養機場：中友店', type: '義式料理', minPrice: 170, minPriceItem: '義大利麵/燉飯', location: '中友百貨', googleMapsLink: '' },
    { name: '一郎食堂', type: '韓式料理', minPrice: 100, minPriceItem: '乾拌麵', location: '一中街', googleMapsLink: '' },
    { name: 'Mr.body健身舒肥水煮餐盒 中友店', type: '健康餐盒', minPrice: 110, minPriceItem: '健康餐盒', location: '中友百貨', googleMapsLink: '' },
    { name: '開源社香雞排 一中店', type: '炸物', minPrice: 70, minPriceItem: '香雞排', location: '一中街', googleMapsLink: '' },
    { name: '和記傻瓜麵', type: '麵食', minPrice: 50, minPriceItem: '傻瓜麵', location: '一中街', googleMapsLink: '' },
    { name: '食初', type: '飯食', minPrice: 50, minPriceItem: '炸蛋肉燥飯', location: '一中街', googleMapsLink: '' } ,
    { name: '韓珍饌複合式餐飲', type: '韓式料理', minPrice: 175, minPriceItem: '牛肉食鍋', location: '一中街', googleMapsLink: '' } ,
    { name: '求求辣年糕', type: '韓式料理', minPrice: 110, minPriceItem: '拉麵', location: '一中街', googleMapsLink: '' } ,
    { name: '云居雞白湯製麵所', type: '拉麵', minPrice: 180, minPriceItem: '拉麵', location: '一中街', googleMapsLink: '' } ,
    { name: '大鬍子', type: '小吃', minPrice: 50, minPriceItem: '玉米湯餃', location: '一中街', googleMapsLink: '' } ,
    { name: '聚一波義式料理', type: '義式料理', minPrice: 200, minPriceItem: '聽說備註學生會有優惠，或許值得一試', location: '一中街', googleMapsLink: '' },
    { name: '空氣', type: 'default', minPrice: 1, minPriceItem: '每次教授一直催的時候需要頂樓新鮮氧氣', location: '臺中科技大學', googleMapsLink: 'https://maps.google.com/?q=國立臺中科技大學 資訊與流通學院 頂樓' }
  ],
  drinks: [
    { name: '五十嵐', type: '手搖飲', minPrice: 25, minPriceItem: '四季春青茶 (中)', location: '一中街', googleMapsLink: '' },
    { name: '一沐日', type: '手搖飲', minPrice: 30, minPriceItem: '招牌紅茶 (中)', location: '一中街', googleMapsLink: '' },
    { name: '得正', type: '手搖飲', minPrice: 30, minPriceItem: '春烏龍 (中)', location: '一中街', googleMapsLink: '' },
    { name: '阿里山鐵道紅茶', type: '手搖飲', minPrice: 30, minPriceItem: '紅茶', location: '一中街', googleMapsLink: '' },
    { name: '大茗', type: '手搖飲', minPrice: 30, minPriceItem: '四季春青茶', location: '一中街', googleMapsLink: '' },
    { name: '八曜和茶', type: '手搖飲', minPrice: 35, minPriceItem: '和風茶', location: '一中街', googleMapsLink: '' },
    { name: '先喝道', type: '手搖飲', minPrice: 35, minPriceItem: '英式紅茶', location: '一中街', googleMapsLink: '' },
    { name: '彰北', type: '手搖飲', minPrice: 25, minPriceItem: '紅茶', location: '一中街', googleMapsLink: '' },
    { name: '米克夏', type: '手搖飲', minPrice: 30, minPriceItem: '茉莉原淬綠茶', location: '一中街', googleMapsLink: '' },
    { name: '路上 Camino', type: '手搖飲', minPrice: 30, minPriceItem: '紅茶', location: '一中街', googleMapsLink: '' },
    { name: '艾得咖啡', type: '咖啡', minPrice: 50, minPriceItem: '美式咖啡', location: '一中街', googleMapsLink: '' },
    { name: 'tea top', type: '手搖飲', minPrice: 30, minPriceItem: '高山青', location: '一中街', googleMapsLink: '' },
    { name: '吳家紅茶冰', type: '手搖飲', minPrice: 25, minPriceItem: '紅茶冰', location: '一中街', googleMapsLink: '' },
    { name: '十九茶屋', type: '手搖飲', minPrice: 30, minPriceItem: '日式煎茶', location: '一中街', googleMapsLink: '' },
    { name: '七盞茶', type: '手搖飲', minPrice: 30, minPriceItem: '四季青茶', location: '一中街', googleMapsLink: '' },
    { name: '龜記', type: '手搖飲', minPrice: 30, minPriceItem: '四季春青茶', location: '一中街', googleMapsLink: '' },
    { name: '再睡五分鐘', type: '手搖飲', minPrice: 35, minPriceItem: '棉被日安紅', location: '一中街', googleMapsLink: '' },
    { name: '顏太煮', type: '手搖飲', minPrice: 30, minPriceItem: '煮TEA紅茶', location: '一中街', googleMapsLink: '' },
    { name: '豐味綠豆沙', type: '手搖飲', minPrice: 35, minPriceItem: '綠豆沙', location: '一中街', googleMapsLink: '' },
    { name: '大苑子', type: '手搖飲', minPrice: 30, minPriceItem: '四季春青茶', location: '一中街', googleMapsLink: '' },
    { name: '可不可', type: '手搖飲', minPrice: 30, minPriceItem: '熟成紅茶 (中)', location: '一中街', googleMapsLink: '' },
    { name: '萬波', type: '手搖飲', minPrice: 30, minPriceItem: '島嶼紅茶 (中)', location: '一中街', googleMapsLink: '' },
    { name: '紅濃紅', type: '手搖飲', minPrice: 30, minPriceItem: '紅茶', location: '一中街', googleMapsLink: '' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const randomButton = document.getElementById('randomButton');
  const selectedRestaurantCard = document.getElementById('selectedRestaurantCard');
  const selectedRestaurantName = document.getElementById('selectedRestaurantName');
  const openMapButton = document.getElementById('openMapButton');
  const restaurantListContainer = document.getElementById('restaurantList');

  // Filter Modal elements
  const filterButton = document.getElementById('filterButton');
  const filterModal = document.getElementById('filterModal');
  const modalContent = document.getElementById('modalContent');
  const closeModalButton = document.getElementById('closeModalButton');
  const mainFiltersContainer = document.getElementById('mainFilters');
  const priceSlider = document.getElementById('priceSlider');
  const priceValue = document.getElementById('priceValue');
  const foodTypeFiltersContainer = document.getElementById('foodTypeFilters');
  const foodTypeFilterSection = document.getElementById('foodTypeFilterSection');
  const applyFilterButton = document.getElementById('applyFilterButton');

  // Detail Modal elements
  const detailModal = document.getElementById('detailModal');
  const detailModalContent = document.getElementById('detailModalContent');
  const closeDetailModalButton = document.getElementById('closeDetailModalButton');
  const detailRestaurantName = document.getElementById('detailRestaurantName');
  const detailRestaurantEmoji = document.getElementById('detailRestaurantEmoji');
  const detailRestaurantType = document.getElementById('detailRestaurantType');
  const detailRestaurantPrice = document.getElementById('detailRestaurantPrice').querySelector('span');
  const detailMapButton = document.getElementById('detailMapButton');

  // Find max price for slider range
  const allRestaurants = [...restaurants.food, ...restaurants.drinks];
  const maxPrice = Math.max(...allRestaurants.map(r => r.minPrice || 0));

  let currentSelectedRestaurants = [];
  let currentFilters = {
    main: 'all',
    types: [],
    maxPrice: maxPrice
  };
  let tempFilters = { ...currentFilters };

  const openGoogleMaps = () => {
    if (currentSelectedRestaurants.length === 0) {
      alert("請先抽個想吃的東西！");
      return;
    }
    if (currentSelectedRestaurants.length === 1) {
      const restaurant = currentSelectedRestaurants[0];
      renderSingleMap(restaurant.name);
    }
    if (currentSelectedRestaurants.length === 2) {
      const place1 = encodeURIComponent(`${currentSelectedRestaurants[0].name} 一中`);
      const place2 = encodeURIComponent(`${currentSelectedRestaurants[1].name} 一中`);
      const directionUrl = `https://www.google.com/maps/dir/${place1}/${place2}`;
      window.open(directionUrl, '_blank');
    }
  };

  const renderSingleMap = (restaurantName) => {
    const restaurant = allRestaurants.find(r => r.name === restaurantName);
    if (!restaurant) return;
    if (restaurant.googleMapsLink) {
      window.open(restaurant.googleMapsLink, '_blank');
    } else {
      const query = encodeURIComponent(`${restaurantName} 一中`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };
  
  // Restored original random select logic
  const handleRandomSelect = () => {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    currentSelectedRestaurants = [];
    let displayText = "";
    if (selectedCategory === 'food') {
      const randomFood = restaurants.food[Math.floor(Math.random() * restaurants.food.length)];
      currentSelectedRestaurants.push(randomFood);
      displayText = randomFood.name;
    } else if (selectedCategory === 'drinks') {
      const randomDrink = restaurants.drinks[Math.floor(Math.random() * restaurants.drinks.length)];
      currentSelectedRestaurants.push(randomDrink);
      displayText = randomDrink.name;
    } else { // 'all'
      const randomFood = restaurants.food[Math.floor(Math.random() * restaurants.food.length)];
      const randomDrink = restaurants.drinks[Math.floor(Math.random() * restaurants.drinks.length)];
      currentSelectedRestaurants.push(randomFood, randomDrink);
      displayText = `餐點：${randomFood.name}<br>飲料：${randomDrink.name}`;
    }
    selectedRestaurantName.innerHTML = displayText;
    selectedRestaurantCard.classList.remove('hidden');
  };

  // --- Filter and Render Logic ---

  const renderRestaurantList = () => {
    restaurantListContainer.innerHTML = '';
    let baseList = [];

    // 1. Filter by main category
    if (currentFilters.main === 'all') {
      baseList = allRestaurants;
    } else if (currentFilters.main === 'food') {
      baseList = restaurants.food;
    } else if (currentFilters.main === 'drinks') {
      baseList = restaurants.drinks;
    }

    // 2. Further filter the base list
    const filteredList = baseList.filter(r => {
      // Price filter
      const priceMatch = !r.minPrice || r.minPrice <= currentFilters.maxPrice;

      // Type filter (only applies if food types are selected)
      const foodTypesSelected = currentFilters.types.length > 0;
      const isFood = restaurants.food.includes(r);
      let typeMatch = true;
      if (foodTypesSelected) {
        if(isFood) {
            typeMatch = currentFilters.types.includes(r.type);
        } else {
            // if main category is "all" and types are selected, we should still show drinks
            typeMatch = currentFilters.main === 'all';
        }
      }
      
      return priceMatch && typeMatch;
    });
    
    // Sort logic to put food before drinks
    filteredList.sort((a, b) => {
        const aIsFood = restaurants.food.includes(a);
        const bIsFood = restaurants.food.includes(b);
        if (aIsFood && !bIsFood) return -1;
        if (!aIsFood && bIsFood) return 1;
        return 0;
    });
    
    if (filteredList.length === 0) {
        restaurantListContainer.innerHTML = `<div class="text-center text-gray-600 p-4">找不到符合條件的店家 T_T</div>`;
        return;
    }

    filteredList.forEach(restaurant => {
      const div = document.createElement('div');
      div.className = 'restaurant-card flex items-center justify-between bg-white p-3 rounded-lg shadow-sm';
      div.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 flex items-center justify-center text-2xl">${getEmojiForType(restaurant.type)}</div>
          <div>
            <div class="font-medium text-gray-800">${restaurant.name}</div>
            <div class="text-sm text-gray-600">${restaurant.type}</div>
          </div>
        </div>
        <button class="map-button text-gray-600 hover:text-gray-800 p-2 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </button>
      `;
      div.querySelector('.map-button').onclick = (e) => {
          e.stopPropagation(); // Prevent modal from opening
          renderSingleMap(restaurant.name);
      };
      div.onclick = () => showDetailModal(restaurant.name);
      restaurantListContainer.appendChild(div);
    });
  };

  const populateFilters = () => {
    // Main filters
    const mainCategories = [
        { key: 'all', name: '全部' },
        { key: 'food', name: '食物' },
        { key: 'drinks', name: '飲料' }
    ];
    mainFiltersContainer.innerHTML = '';
    mainCategories.forEach(cat => {
        const button = document.createElement('button');
        button.className = 'filter-tag';
        button.textContent = cat.name;
        button.dataset.filter = cat.key;
        if (tempFilters.main === cat.key) button.classList.add('active');
        button.onclick = () => {
            tempFilters.main = cat.key;
            if (cat.key === 'drinks') {
                tempFilters.types = [];
            }
            populateFilters();
        };
        mainFiltersContainer.appendChild(button);
    });

    // Price slider
    priceSlider.max = maxPrice;
    priceSlider.value = tempFilters.maxPrice;
    priceValue.textContent = `$${tempFilters.maxPrice} 以下`;
    priceSlider.oninput = () => {
        tempFilters.maxPrice = parseInt(priceSlider.value);
        priceValue.textContent = `$${tempFilters.maxPrice} 以下`;
    };

    // Food type filters
    if (tempFilters.main === 'food' || tempFilters.main === 'all') {
        foodTypeFilterSection.classList.remove('hidden');
        const foodTypes = [...new Set(restaurants.food.map(r => r.type))].sort();
        foodTypeFiltersContainer.innerHTML = '';
        foodTypes.forEach(type => {
            const button = document.createElement('button');
            button.className = 'filter-tag';
            button.textContent = type;
            button.dataset.type = type;
            if (tempFilters.types.includes(type)) button.classList.add('active');

            button.onclick = () => {
                if (tempFilters.types.includes(type)) {
                    tempFilters.types = tempFilters.types.filter(t => t !== type);
                } else {
                    tempFilters.types.push(type);
                }
                populateFilters();
            };
            foodTypeFiltersContainer.appendChild(button);
        });
    } else {
        foodTypeFilterSection.classList.add('hidden');
    }
  };
  
  // --- Modal Control ---

  const openFilterModal = () => {
    tempFilters = JSON.parse(JSON.stringify(currentFilters));
    populateFilters();
    filterModal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
  };

  const closeFilterModal = () => {
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        filterModal.classList.add('hidden');
    }, 300);
  };
  
  const showDetailModal = (restaurantName) => {
    const restaurant = allRestaurants.find(r => r.name === restaurantName);
    if (!restaurant) return;

    detailRestaurantName.textContent = restaurant.name;
    detailRestaurantEmoji.textContent = getEmojiForType(restaurant.type);
    detailRestaurantType.textContent = restaurant.type;
    if(restaurant.minPrice && restaurant.minPriceItem) {
        detailRestaurantPrice.parentElement.classList.remove('hidden');
        detailRestaurantPrice.textContent = `$${restaurant.minPrice} 起 (${restaurant.minPriceItem})`;
    } else {
        detailRestaurantPrice.parentElement.classList.add('hidden');
    }

    detailMapButton.onclick = () => renderSingleMap(restaurant.name);

    detailModal.classList.remove('hidden');
    setTimeout(() => {
        detailModalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
  };

  const closeDetailModal = () => {
    detailModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        detailModal.classList.add('hidden');
    }, 300);
  };
  
  // --- Event Listeners ---
  randomButton.addEventListener('click', handleRandomSelect);
  openMapButton.addEventListener('click', openGoogleMaps);
  
  // Filter Modal listeners
  filterButton.addEventListener('click', openFilterModal);
  closeModalButton.addEventListener('click', closeFilterModal);
  filterModal.addEventListener('click', (e) => {
    if (e.target === filterModal) closeFilterModal();
  });
  applyFilterButton.addEventListener('click', () => {
    currentFilters = JSON.parse(JSON.stringify(tempFilters));
    renderRestaurantList();
    closeFilterModal();
  });

  // Detail Modal listeners
  closeDetailModalButton.addEventListener('click', closeDetailModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeDetailModal();
  });

  // Initial Render
  renderRestaurantList();
});

