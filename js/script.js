//this is script before import/export
import { fetchAllProducts } from "./constant.js";

const productList = document.querySelector(".product-list");






//go through array 
async function renderProducts() {
    //fetch data
    const products = await fetchAllProducts();
    //loop through array with forEach function
    products.forEach(product => {
    console.log(products);
    //give callback with an argument using Function renderSingleProduct()
    const domItem = renderSingleProductHTML(product)
    //domItem = "product-list"in html 
    productList.append(domItem)
    // append ==add to end, productList(const)(domItem = info from API)
    })

}
renderProducts();

// fetchAllProducts();
// fetchSingleProduct(42)


// const detailsWrapper = document.querySelector(".overview-page")
// const queryString = location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// async function renderProduct() {
//     const product = await fetchProduct(id);
//     const productHTML = renderSingleProductHTML(product);
//     detailsWrapper.textContent = ""
//     detailsWrapper.append(productHTML)
// }

// renderProduct();



