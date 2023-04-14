const apiBase = "https://charlottelund.no";
const WooComBase = "/wp-json/wc/store";
const productBase = "/products";

const pagesBase = "/wp-json/wp/v2/pages";

const fullPageUrl = apiBase + pagesBase;
const fullProductUrl = apiBase + WooComBase + productBase;



async function getProducts() {
    const response = await fetch(fullProductUrl);
    const products = await response.json()

    return products
}

function createProductHTML(product) {
    const container = document.querySelector(".productContainer");
 

    const productContainer = document.createElement("a");
    productContainer.href = "./overviewjakcet.html"
    productContainer.classList.add("product");
    productContainer.id = product.id;




    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title)

    const titleName = document.createElement("h3");
    titleName.innerHTML = product.short_description;
    productContainer.append(titleName)


    container.append(productContainer)
}

function createProductsHTML(products) {
    for (let i = 0; i < products.length; i ++) {
        const product = products[i];
        createProductHTML(product)
    }
}

async function productPage() {
    const products = await getProducts()
    createProductsHTML(products)
    console.log(products[0]);
}
productPage()