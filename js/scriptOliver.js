//copy from Olvier video

const urlBase = "https://wordpress.charlottelund.no";
const wooCom = "/wp-json/wc/store";
const productBase = "/products";

const pageBase = "/wp-json/wp/v2/pages"

const fullPageUrl = urlBase + pageBase;
const fullProductUrl = urlBase + wooCom + productBase;

//this function gets the products (a tool/get the data)
async function getProducts(){
    const response = await fetch(fullProductUrl);
    const products = await response.json()
    return products
}

getProducts();

//showing data 
function createProductHTML(product){
    const container = document.querySelector(".product-list");

    const productContainer = document.createElement("a");
    productContainer.classList.add("product");
    productContainer.href = "./product/productDetails.html?id=${id}";
    
    const productList = document.createElement("div");
    productList.classList.add("product");
    productList.id = product.id;

    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title);

    for (let i = 0; i < product.images.length; i ++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img)
    }

   
    const button = document.createElement("div");
    button.classList.add("cta");
    button.classList.add("cta-small");
    button.innerText = "Shop";
    productContainer.append(button)

    
    //add this to show container
    container.append(productContainer)

}

//loop through products
function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        //get one product
        const product = products[i];
        createProductHTML(product);
    }
}

// use the fetchAllProducts function
async function productPage() {
    const products = await getProducts()
    // get an example on object names: id, name, images
    // console.log(products[0]);

    createProductsHTML(products)
}

productPage()