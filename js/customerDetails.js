import { fetchSingleProduct } from "./constant.js";

const summaryWrapper = document.querySelector(".ApiJacket")
const priceWrapper = document.querySelector(".summaryPrice")
const priceWrapper2 = document.querySelector(".summaryPrice2")
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function renderSummary() {
    const product = await fetchSingleProduct(id);

    summaryWrapper.textContent = "";

    const heading = document.createElement("h2");
    heading.innerText = product.name;

    const productName = document.createElement("h3")
    productName.innerHTML = product.description;

    const detailsImage = document.createElement("img");
    detailsImage.src = product.images[0].src;
    detailsImage.alt = product.images[0].alt;

    const price = document.createElement("h4");
    price.innerText = product.prices.price + " " + "Kr";

    summaryWrapper.append(heading, productName,  detailsImage);
    return summaryWrapper;


}
renderSummary();


async function renderPrice () {
    const product = await fetchSingleProduct(id);

    const price = document.createElement("p");
    price.innerText = product.prices.price + " " + "Kr";

    const totalPrice = document.createElement("p");
    totalPrice.innerText =product.prices.price + " " + "Kr";

    priceWrapper.append(price);
    priceWrapper2.append(totalPrice);
    return priceWrapper;
    return priceWrapper2;

}
renderPrice();

export {
    renderSummary,
    renderPrice
}
