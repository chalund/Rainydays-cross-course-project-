import { fetchSingleProduct, renderSingleProductHTML } from "./constant.js";

const detailsWrapper = document.querySelector(".overview-page")
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


async function renderProduct() {
    const product = await fetchSingleProduct(id); 

    detailsWrapper.textContent = "";
  
    const detailsImage = document.createElement("img");
    detailsImage.src = product.images[0].src;
    detailsImage.alt = product.images[0].alt;

    const overviewDetails = document.createElement("div");
    overviewDetails.classList.add("overview-details"); 

    const heading = document.createElement("h2");
    heading.innerText = product.name;
    
    const productName = document.createElement("h3")
    productName.innerHTML = product.description;

    const price = document.createElement("h4");
    price.innerText = product.prices.price + " " + "Kr";

    const productInfo = document.createElement("p");
    productInfo.innerHTML = product.short_description;

    const button = document.createElement("a");
    button.href = `./customerDetails.html?id=${id}`;
    button.classList.add("cta");
    button.classList.add("cta-API");
    button.innerText = "Shop";


    detailsWrapper.append(detailsImage , overviewDetails ,heading , productName, price, productInfo, button);
    return detailsWrapper;
}

renderProduct();