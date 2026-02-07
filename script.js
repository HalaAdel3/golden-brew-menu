fetch('menu.json')
  .then(res => res.json())
  .then(data => {

    const categories = ["الكل", ...new Set(data.map(item => item.category))];
    const categoryContainer = document.getElementById('categories');
    const menuContainer = document.getElementById('menu-container');

    function displayItems(category) {
      menuContainer.innerHTML = "";

      const filtered = category === "الكل" 
        ? data 
        : data.filter(item => item.category === category);

      filtered.forEach(item => {
        menuContainer.innerHTML += `
          <div class="card">
            <img src="${item.image}" alt="${item.name}">
            <div class="card-content">
              <h3>${item.name}</h3>
              <div class="price">${item.price} جنيه</div>
            </div>
          </div>
        `;
      });
    }

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.textContent = cat;
      btn.onclick = () => displayItems(cat);
      categoryContainer.appendChild(btn);
    });

    displayItems("الكل");
  });
