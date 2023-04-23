const urlBase = "https://wordpress.charlottelund.no";
const wooCom = "/wp-json/wc/store";
const productBase = "/products";

const productUrl = urlBase + wooCom + productBase;



async function fetchAllProducts(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchSingleProduct(id) {
    const response = await fetch(urlBase + wooCom + productBase + `/${id}`);
    const result = await response.json();
    return result;
}


function renderSingleProductHTML(product){
    const {id , name, description, images } = product;

    const wrapper = document.createElement("a");
    wrapper.href = `./product/productDetails.html?id=${id}`;
    wrapper.classList.add("product");

    const heading = document.createElement("h2")
    heading.innerText = name;

    const productName = document.createElement("h3")
    productName.innerHTML = description;

    const image = document.createElement("img");
    image.src = images[0].src;
    image.alt = images[0].alt;

    const button = document.createElement("div");
    button.classList.add("cta");
    button.classList.add("cta-small");
    button.innerText = "Shop";
    
    wrapper.append(heading, productName, image, button);
    return wrapper;
}







export {
    urlBase,
    wooCom,
    productBase,
    productUrl,
    fetchAllProducts,
    fetchSingleProduct,
    renderSingleProductHTML,
}