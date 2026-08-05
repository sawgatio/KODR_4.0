const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Mobile", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Shoes", category: "Footwear" },
  { name: "Watch", category: "Accessories" }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("search");


function displayProducts(items) {
  productList.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.category}</p>
    `;
    productList.appendChild(card);
  });
}

displayProducts(products);


searchInput.addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchValue) ||
    product.category.toLowerCase().includes(searchValue)
  );

  
  displayProducts(filteredProducts);
});
