

import { fetchAllProducts, fetchSingleProduct, productUrl } from "./constant.js";
// import { renderSummary } from "./customerDetails.js";

const paymentWrapper = document.querySelector(".order-summary-content");
const paymentSummary = document.querySelector(".summaryPrice");
const paymentSummary2 = document.querySelector(".summaryPrice2");
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function renderPayment(url) {
    const product = await fetchSingleProduct(url)
    console.log(product)
}

renderPayment()




// // async function renderProducts(url) {
// async function renderPayment(url) {

//     // const products = await fetchAllProducts(url);
//     const products = await fetchAllProducts(url);

//     //   productList.textContent = "";
//     paymentWrapper.textContent = "";

//     product.forEach((products) => {
//         const payment = renderSummary(products);
//         paymentWrapper.append(payment)
//     });
  
// }

// renderPayment(productUrl);








//   products.forEach((product) => {
//     const domItem = renderSingleProductHTML(product);
//     productList.append(domItem);
//   });
// }


