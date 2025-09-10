// 來自 App.jsx 的餐廳資料
const restaurants = {
  food: [
    { name: '金大發', type: '火鍋', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=金大發' },
    { name: '花囍家', type: '日式料理', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=花囍家' },
    { name: '飯飯', type: '飯食', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=飯飯' },
    { name: '虎福福飯包', type: '飯包', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=虎福福飯包' },
    { name: '微滷', type: '滷味', location: '一中街', googleMapsLink: '' },
    { name: '偈亭', type: '火鍋', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=偈亭' },
    { name: '三商巧福', type: '牛肉麵', location: '一中街', googleMapsLink: '' },
    { name: '莊爸炸雞魯肉飯', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '頂吉古早味雞肉飯', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '鑫吉野', type: '日式料理', location: '一中街', googleMapsLink: '' },
    { name: '丸龜製麵', type: '烏龍麵', location: '一中街', googleMapsLink: '' },
    { name: '丸勝咖哩', type: '咖哩', location: '一中街', googleMapsLink: '' },
    { name: 'JT燉飯', type: '燉飯', location: '一中街', googleMapsLink: 'https://maps.google.com/?q=JT燉飯' },
    { name: '二口炒飯', type: '炒飯', location: '一中街', googleMapsLink: '' },
    { name: '亞丁尼 一中', type: '義式料理', location: '一中街', googleMapsLink: '' },
    { name: '晨家早午餐 一中', type: '早午餐', location: '一中街', googleMapsLink: '' },
    { name: '艾初早午餐 一中太平', type: '早午餐', location: '一中街', googleMapsLink: '' },
    { name: 'SUBWAY 台中三民', type: '潛艇堡', location: '三民路', googleMapsLink: '' },
    { name: '肯德基 台中五權餐廳', type: '速食', location: '五權路', googleMapsLink: '' },
    { name: '漢堡王 一中', type: '速食', location: '一中街', googleMapsLink: '' },
    { name: '振興行', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '花月嵐 中友', type: '拉麵', location: '中友百貨', googleMapsLink: '' },
    { name: '一中飯飯', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '山西刀削麵食館', type: '麵食', location: '一中街', googleMapsLink: '' },
    { name: '小象', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '金煮韓食 一中', type: '韓式料理', location: '一中街', googleMapsLink: '' },
    { name: '亞丁尼對面的雞肉飯', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '鐵板燒 一中', type: '鐵板燒', location: '一中街', googleMapsLink: '' },
    { name: '忠午飯捲', type: '飯捲', location: '一中街', googleMapsLink: '' },
    { name: '抓 蔥抓餅專賣', type: '小吃', location: '一中街', googleMapsLink: '' },
    { name: '小紅帽烤肉飯', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '食也', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '京厚屋 一中', type: '日式料理', location: '一中街', googleMapsLink: '' },
    { name: '私肉羹', type: '小吃', location: '一中街', googleMapsLink: '' },
    { name: '天使雞排', type: '炸物', location: '一中街', googleMapsLink: '' },
    { name: '八兩', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '鍋湯匯 一中', type: '火鍋', location: '一中街', googleMapsLink: '' },
    { name: '麥當勞 三民', type: '速食', location: '三民路', googleMapsLink: '' },
    { name: '爭鮮 中友', type: '壽司', location: '中友百貨', googleMapsLink: '' },
    { name: '全方位自助餐', type: '自助餐', location: '一中街', googleMapsLink: '' },
    { name: '初心手作壽司 一中', type: '壽司', location: '一中街', googleMapsLink: '' },
    { name: '好犀利麻辣鴨血 愛廣場', type: '麻辣鴨血', location: '愛廣場', googleMapsLink: '' },
    { name: '阿如早餐', type: '早餐', location: '一中街', googleMapsLink: '' },
    { name: '川牛 一中', type: '燒肉丼飯', location: '一中街', googleMapsLink: '' },
    { name: '里奇 健康餐盒 五義店', type: '健康餐盒', location: '五義街', googleMapsLink: '' },
    { name: 'EAT義大利麵', type: '義大利麵', location: '一中街', googleMapsLink: '' },
    { name: '愛廣場拉麵', type: '拉麵', location: '愛廣場', googleMapsLink: '' },
    { name: '肉蛋吐司紅茶牛奶', type: '早餐', location: '一中街', googleMapsLink: '' },
    { name: '月光寶盒', type: '飯食', location: '一中街', googleMapsLink: '' },
    { name: '晨元元堡早午餐餃館', type: '早午餐', location: '一中街', googleMapsLink: '' },
    { name: '小倆口章魚燒', type: '小吃', location: '一中街', googleMapsLink: '' },
    { name: '默金 Pasta 義大利面', type: '義大利麵', location: '一中街', googleMapsLink: '' },
    { name: '諾諾索 Non Lo So 義式料理一中店', type: '義式料理', location: '一中街', googleMapsLink: '' },
    { name: 'Gray House Living&Pasta 灰房子 義式料理', type: '義式料理', location: '一中街', googleMapsLink: '' },
    { name: '養機場：中友店', type: '炸物', location: '中友百貨', googleMapsLink: '' },
    { name: '一郎食堂', type: '日式料理', location: '一中街', googleMapsLink: '' },
    { name: 'Mr.body健身舒肥水煮餐盒 中友店', type: '健康餐盒', location: '中友百貨', googleMapsLink: '' },
    { name: '開源社香雞排 一中店', type: '炸物', location: '一中街', googleMapsLink: '' },
    { name: '和記傻瓜麵', type: '麵食', location: '一中街', googleMapsLink: '' },
    { name: '食初', type: '飯食', location: '一中街', googleMapsLink: '' }
  ],
  drinks: [
    { name: '五十嵐', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '一沐日', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '得正', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '阿里山鐵道紅茶', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '大茗', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '八曜和茶', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '先喝道', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '彰北', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '米克夏', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '路上 Camino', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '艾得咖啡', type: '咖啡', location: '一中街', googleMapsLink: '' },
    { name: 'tea top', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '吳家紅茶冰', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '十九茶屋', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '七盞茶', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '龜記', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '再睡五分鐘', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '顏太煮', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '豐味綠豆沙', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '大苑子', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '可不可', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '萬波', type: '手搖飲', location: '一中街', googleMapsLink: '' },
    { name: '紅濃紅', type: '手搖飲', location: '一中街', googleMapsLink: '' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const randomButton = document.getElementById('randomButton');
  const selectedRestaurantCard = document.getElementById('selectedRestaurantCard');
  const selectedRestaurantName = document.getElementById('selectedRestaurantName');
  const openMapButton = document.getElementById('openMapButton');
  const foodListContainer = document.getElementById('foodList');
  const drinksListContainer = document.getElementById('drinksList');
  const tabFood = document.getElementById('tabFood');
  const tabDrinks = document.getElementById('tabDrinks');
  const contentFood = document.getElementById('contentFood');
  const contentDrinks = document.getElementById('contentDrinks');
  
  // ***修改***：用一個陣列來儲存選中的餐廳物件
  let currentSelectedRestaurants = [];

  // ***修改***：開啟 Google Maps 的函式，現在會根據選中的餐廳數量決定行為
  const openGoogleMaps = () => {
    // 處理沒有選擇任何餐廳的狀況
    if (currentSelectedRestaurants.length === 0) {
      alert("請先抽個想吃的東西！");
      return;
    }

    // 處理只選中一家的狀況
    if (currentSelectedRestaurants.length === 1) {
      const restaurant = currentSelectedRestaurants[0];
      if (restaurant.googleMapsLink) {
        window.open(restaurant.googleMapsLink, '_blank');
      } else {
        const query = encodeURIComponent(`${restaurant.name} 一中`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
      }
    }

    // ***新增***：處理選中兩家（食物＋飲料）的狀況
    if (currentSelectedRestaurants.length === 2) {
      // 分別對餐廳和飲料店名稱進行 URL 編碼
      const place1 = encodeURIComponent(`${currentSelectedRestaurants[0].name} 一中`);
      const place2 = encodeURIComponent(`${currentSelectedRestaurants[1].name} 一中`);
      
      // 產生導航路線的 URL
      const directionUrl = `https://www.google.com/maps/dir/${place1}/${place2}`;
      window.open(directionUrl, '_blank');
    }
  };

  // 渲染餐廳列表的函式 (單純用來顯示在列表，點擊地圖時有另外的邏輯)
  const renderSingleMap = (restaurantName) => {
    const allRestaurants = [...restaurants.food, ...restaurants.drinks];
    const restaurant = allRestaurants.find(r => r.name === restaurantName);
    if (restaurant && restaurant.googleMapsLink) {
      window.open(restaurant.googleMapsLink, '_blank');
    } else {
      const query = encodeURIComponent(`${restaurantName} 一中`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };


  // ***修改***：隨機選擇餐廳的函式
  const handleRandomSelect = () => {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    currentSelectedRestaurants = []; // 先清空上次的選擇

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
      // ***新增***：分別從食物和飲料中各選一個
      const randomFood = restaurants.food[Math.floor(Math.random() * restaurants.food.length)];
      const randomDrink = restaurants.drinks[Math.floor(Math.random() * restaurants.drinks.length)];
      currentSelectedRestaurants.push(randomFood, randomDrink); // 依序存入
      
      // ***新增***：用換行符號來顯示兩個選項
      displayText = `餐點：${randomFood.name}<br>飲料：${randomDrink.name}`;
    }
    
    // 使用 innerHTML 才能解析 <br> 標籤
    selectedRestaurantName.innerHTML = displayText;
    selectedRestaurantCard.classList.remove('hidden');
  };
  
  // 渲染餐廳列表的函式
  const renderRestaurantList = (container, list) => {
    container.innerHTML = '';
    list.forEach(restaurant => {
      const div = document.createElement('div');
      div.className = 'flex items-center justify-between bg-white p-3 rounded-lg shadow-sm';
      div.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-orange-400 rounded-lg"></div>
          <div>
            <div class="font-medium text-gray-800">${restaurant.name}</div>
            <div class="text-sm text-gray-600">${restaurant.type}</div>
          </div>
        </div>
        <button class="map-button text-gray-600 hover:text-gray-800 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </button>
      `;
      // 列表中的地圖按鈕維持原有單點搜尋功能
      div.querySelector('.map-button').onclick = () => renderSingleMap(restaurant.name);
      container.appendChild(div);
    });
  };

  // 綁定事件
  randomButton.addEventListener('click', handleRandomSelect);
  // ***修改***：按鈕現在直接呼叫 openGoogleMaps 函式
  openMapButton.addEventListener('click', openGoogleMaps);

  tabFood.addEventListener('click', () => {
    contentFood.classList.remove('hidden');
    contentDrinks.classList.add('hidden');
    tabFood.classList.add('active');
    tabDrinks.classList.remove('active');
  });

  tabDrinks.addEventListener('click', () => {
    contentDrinks.classList.remove('hidden');
    contentFood.classList.add('hidden');
    tabDrinks.classList.add('active');
    tabFood.classList.remove('active');
  });

  // 初始渲染
  renderRestaurantList(foodListContainer, restaurants.food);
  renderRestaurantList(drinksListContainer, restaurants.drinks);
});