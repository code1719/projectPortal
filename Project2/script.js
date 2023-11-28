// Put DOM elements into variables
let productForm = document.querySelector("#productForm");

let msg = document.querySelector(".msg");
let userList = document.querySelector("#users");

// Listen for form submit
productForm.addEventListener("submit", onSubmit);

let productArray = [];

function onSubmit(e) {
  e.preventDefault();

  let product = document.getElementById('productInput').value;

  if (productInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Add product to product array

    productArray.push(product);
    console.log(productArray);
    document.getElementById('productInput').value = '';

    displayProducts();
  }
}
function displayProducts(){
    let productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';
    productArray.forEach(function(product){
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(product));
      productListElement.appendChild(li);
    });
}