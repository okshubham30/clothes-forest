
// ================================
// CART
// ================================

// Cart ko LocalStorage se load karo
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ================================
// CART COUNT
// ================================

function updateCartCount() {

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}


// Page load hote hi count update
updateCartCount();


// ================================
// ADD TO CART
// ================================

function addToCart(name, price) {

    const product = {
        name: name,
        price: price
    };

    cart.push(product);

    // LocalStorage me save
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart 🛒");
}


// ================================
// SEARCH BOX
// ================================

function openSearch() {

    const searchBox = document.getElementById("searchBox");

    searchBox.style.display = "block";

    document.getElementById("searchInput").focus();
}


function closeSearch() {

    const searchBox = document.getElementById("searchBox");

    searchBox.style.display = "none";

    document.getElementById("searchInput").value = "";

    searchProducts();
}


// ================================
// SEARCH PRODUCTS
// ================================

function searchProducts() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product.getAttribute("data-name").toLowerCase();

        if (productName.includes(input)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });
}


// ================================
// SORT PRODUCTS
// ================================

function sortProducts() {

    const container =
        document.getElementById("productContainer");

    const products =
        Array.from(container.querySelectorAll(".product-card"));

    const sortValue =
        document.getElementById("sortProducts").value;


    if (sortValue === "low") {

        products.sort(function(a, b) {

            return (
                Number(a.getAttribute("data-price")) -
                Number(b.getAttribute("data-price"))
            );

        });

    }


    else if (sortValue === "high") {

        products.sort(function(a, b) {

            return (
                Number(b.getAttribute("data-price")) -
                Number(a.getAttribute("data-price"))
            );

        });

    }


    // Products ko dobara display karo

    products.forEach(function(product) {

        container.appendChild(product);

    });

}


// ================================
// OFFER BUTTON
// ================================

function claimOffer() {

    alert(
        "🎉 Congratulations!\n\n" +
        "You got 30% OFF on your first order!"
    );

}


// ================================
// CATEGORY CLICK
// ================================

const categories =
    document.querySelectorAll(".category-card");

categories.forEach(function(category) {

    category.addEventListener("click", function() {

        const categoryName =
            category.querySelector("h3").innerText;

        alert(
            "You selected: " +
            categoryName
        );

    });

});


// ================================
// PREVENT OLD CART DATA ERROR
// ================================

window.addEventListener("storage", function() {

    cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    updateCartCount();

});

