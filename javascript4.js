
let count = 0;

function addToCart() {
    count++;

    document.getElementById("cart-count").innerHTML = count;

    alert("Product added to cart!");
}