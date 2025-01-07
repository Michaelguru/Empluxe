



const cart = [];
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");


// Add click event listener to all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");
      const name = product.getAttribute("data-name");
      const price = parseFloat(product.getAttribute("data-price"));
      
  
      
        addToCart(name, price,);
     
      
    });
  });
  
  // Function to add an item to the cart
  function addToCart(name, price, ) {
    const existingItem = cart.find((item) => item.name === name);
  
    if (existingItem) {
      existingItem.quantity++;
      existingItem.total = existingItem.quantity * existingItem.price;
    } else {
      cart.push({
        name,
        price,
        quantity: 1,
        total: price,
      });
    }
  
    updateCart();
    
  }
  
  // Function to update the cart display
  function updateCart() {
    cartItemsContainer.innerHTML = ""; // Clear previous items
  
    cart.forEach((item, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${item.total.toFixed(2)}</td>
        <td><button class="remove" data-index="${index}">Remove</button></td>
      `;
  
      cartItemsContainer.appendChild(row);
    });
  
    updateTotalPrice();
    addRemoveListeners();
    
  }
  
  // Function to update the total price
  function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
  }
  
  // Function to add event listeners to "Remove" buttons
  function addRemoveListeners() {
    document.querySelectorAll(".remove").forEach((button) => {
      button.addEventListener("click", () => {
        const index = button.getAttribute("data-index");
        cart.splice(index, 1);
        updateCart();
      });
    });
  }


  



  function cartView(){
    document.querySelector(".cart").style.display = 'block';
  }
  function cartCancel(){
    document.querySelector(".cart").style.display = 'none';
  }