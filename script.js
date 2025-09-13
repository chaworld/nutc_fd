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


document.addEventListener('DOMContentLoaded', () => {
  let restaurants;
  let campusName;
  let campusTitle;

  // 根據 body 的 id 判斷當前校區並載入對應資料
  if (document.body.id === 'sanmin-page') {
      restaurants = sanminRestaurants;
      campusName = "一中";
      campusTitle = "三民校區";
  } else if (document.body.id === 'minsheng-page') {
      restaurants = minshengRestaurants;
      campusName = "台中民生校區";
      campusTitle = "民生校區";
  } else {
      console.error("錯誤：請在 <body> 標籤中設定 id 為 'sanmin-page' 或 'minsheng-page'");
      // 預設載入三民校區資料以避免程式崩潰
      restaurants = sanminRestaurants;
      campusName = "一中";
      campusTitle = "三民校區";
  }

  const randomButton = document.getElementById('randomButton');
  const inspirationButton = document.getElementById('inspirationButton');
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

  // Inspiration Modal elements
  const inspirationModal = document.getElementById('inspirationModal');
  const inspirationModalContent = document.getElementById('inspirationModalContent');
  const closeInspirationModalButton = document.getElementById('closeInspirationModalButton');
  const inspirationResult = document.getElementById('inspirationResult');


  // Find max price for slider range
  const allRestaurants = [...restaurants.food, ...restaurants.drinks];
  const maxPrice = Math.max(...allRestaurants.map(r => r.minPrice || 0), 100); // Default max to 100 if no items

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
      const place1 = encodeURIComponent(`${currentSelectedRestaurants[0].name} ${campusName}`);
      const place2 = encodeURIComponent(`${currentSelectedRestaurants[1].name} ${campusName}`);
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
      const query = encodeURIComponent(`${restaurantName} ${campusName}`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };

  const handleRandomSelect = () => {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    currentSelectedRestaurants = [];
    let displayText = "";
    
    const hasFood = restaurants.food.length > 0;
    const hasDrinks = restaurants.drinks.length > 0;

    if (selectedCategory === 'food') {
        if (!hasFood) { alert("目前沒有食物店家喔！"); return; }
        const randomFood = restaurants.food[Math.floor(Math.random() * restaurants.food.length)];
        currentSelectedRestaurants.push(randomFood);
        displayText = randomFood.name;
    } else if (selectedCategory === 'drinks') {
        if (!hasDrinks) { alert("目前沒有飲料店家喔！"); return; }
        const randomDrink = restaurants.drinks[Math.floor(Math.random() * restaurants.drinks.length)];
        currentSelectedRestaurants.push(randomDrink);
        displayText = randomDrink.name;
    } else { // 'all'
        if (!hasFood && !hasDrinks) { alert("目前沒有任何店家喔！"); return; }
        let foodText = "N/A", drinkText = "N/A";

        if (hasFood) {
            const randomFood = restaurants.food[Math.floor(Math.random() * restaurants.food.length)];
            currentSelectedRestaurants.push(randomFood);
            foodText = randomFood.name;
        }
         if (hasDrinks) {
            const randomDrink = restaurants.drinks[Math.floor(Math.random() * restaurants.drinks.length)];
            currentSelectedRestaurants.push(randomDrink);
            drinkText = randomDrink.name;
        }
        displayText = `餐點：${foodText}<br>飲料：${drinkText}`;
    }
    selectedRestaurantName.innerHTML = displayText;
    selectedRestaurantCard.classList.remove('hidden');
  };

  const renderRestaurantList = () => {
    restaurantListContainer.innerHTML = '';
    let baseList = [];

    if (currentFilters.main === 'all') {
      baseList = allRestaurants;
    } else if (currentFilters.main === 'food') {
      baseList = restaurants.food;
    } else if (currentFilters.main === 'drinks') {
      baseList = restaurants.drinks;
    }

    const filteredList = baseList.filter(r => {
      const priceMatch = !r.minPrice || r.minPrice <= currentFilters.maxPrice;
      const foodTypesSelected = currentFilters.types.length > 0;
      const isFood = restaurants.food.includes(r);
      let typeMatch = true;
      if (foodTypesSelected) {
        if(isFood) {
            typeMatch = currentFilters.types.includes(r.type);
        } else {
            typeMatch = currentFilters.main === 'all';
        }
      }
      return priceMatch && typeMatch;
    });
    
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
          e.stopPropagation();
          renderSingleMap(restaurant.name);
      };
      div.onclick = () => showDetailModal(restaurant.name);
      restaurantListContainer.appendChild(div);
    });
  };

  const populateFilters = () => {
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

    priceSlider.max = maxPrice;
    priceSlider.value = tempFilters.maxPrice;
    priceValue.textContent = `$${tempFilters.maxPrice} 以下`;
    priceSlider.oninput = () => {
        tempFilters.maxPrice = parseInt(priceSlider.value);
        priceValue.textContent = `$${tempFilters.maxPrice} 以下`;
    };

    if (tempFilters.main === 'food' || tempFilters.main === 'all') {
        foodTypeFilterSection.classList.remove('hidden');
        const foodTypes = [...new Set(restaurants.food.map(r => r.type))].sort();
        foodTypeFiltersContainer.innerHTML = '';

        if (foodTypes.length === 0) {
            foodTypeFiltersContainer.innerHTML = `<p class="text-sm text-gray-500">暫無美食類型</p>`;
        } else {
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
        }
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

  // --- Inspiration Modal Logic ---

  const openInspirationModal = () => {
    inspirationModal.classList.remove('hidden');
    setTimeout(() => {
        inspirationModalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
  };

  const closeInspirationModal = () => {
    inspirationModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        inspirationModal.classList.add('hidden');
    }, 300);
  };

  const getInspiration = async () => {
    openInspirationModal();
    inspirationResult.innerHTML = `
      <div class="flex flex-col items-center justify-center p-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        <p class="mt-4 text-gray-600">正在呼叫靈感小助理...</p>
      </div>`;

    const foodTypes = [...new Set(restaurants.food.map(r => r.type))];
    const drinkTypes = [...new Set(restaurants.drinks.map(r => r.type))];

    try {
        const response = await fetch('https://nutc-fd.vercel.app/api/getInspiration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ foodTypes, drinkTypes, campus: campusTitle }),
        });

        if (!response.ok) {
            throw new Error(`伺服器錯誤: ${response.status}`);
        }

        const data = await response.json();
        
        // 將純文字回應轉換為 HTML
        const formattedResponse = data.text
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-orange-600">$1</strong>') // 粗體
            .replace(/\n/g, '<br>'); // 換行

        inspirationResult.innerHTML = formattedResponse;

    } catch (error) {
        console.error("無法取得靈感:", error);
        inspirationResult.innerHTML = `<p class="text-red-500 text-center">糟糕，靈感斷線了！<br>請稍後再試一次。</p>`;
    }
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

  // Inspiration Modal listeners
  inspirationButton.addEventListener('click', getInspiration);
  closeInspirationModalButton.addEventListener('click', closeInspirationModal);
  inspirationModal.addEventListener('click', (e) => {
      if(e.target === inspirationModal) closeInspirationModal();
  });

  // Initial Render
  renderRestaurantList();
});

