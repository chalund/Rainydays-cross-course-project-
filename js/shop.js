const baseUrl = "https://charlottelund.no/wp-json/wc/store/products";
const productContainer = document.querySelector(".product-list");
const categories = document.querySelectorAll(".categories");
const searchButton = document.querySelector("#search-icon");


async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);

    products.forEach(function(product){
        productContainer.innerHTML += `
                            <a href="../product/overviewjacket.html?id=${product.id}">
                            <div class="product">
                            <h2>${product.name}</h2>
                            <h3>${product.short_description}</h3>
                            <img src="${product.images[0].src}" alt="${product.name}">
                            <p class="cta cta-small">Add to cart</p>
                            </div>
                            </a>`
    });
}
getProducts(baseUrl);


// Find different categories
categories.forEach(function(category){
    category.onclick = function(event) {
        let newUrl;
        if(event.target.id === "featured"){
            newUrl = baseUrl + "?featured=true"
        }
        else {
            const categoryChosen = event.target.value;
            newUrl = baseUrl + `?category=${categoryChosen}`;
        }
        productContainer.innerHTML = "";

        getProducts(newUrl);
    }
});

//


//Search bar, only works on mens page
searchButton.onclick = function() {
    const searchInput = document.querySelector("#search-bar").value;
    const newUrl = baseUrl + `?search=${searchInput}`;
    productContainer.innerHTML = "";
    getProducts(newUrl);
};



