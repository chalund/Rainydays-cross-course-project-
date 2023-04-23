import { fetchAllProducts, renderSingleProductHTML, productUrl,} from "./constant.js";

const productList = document.querySelector(".product-list");
const categories = document.querySelectorAll(".categories2");


async function renderProducts(url) {
  const products = await fetchAllProducts(url);

  productList.textContent = "";

  products.forEach((product) => {
    const domItem = renderSingleProductHTML(product);
    productList.append(domItem);
  });
}
renderProducts(productUrl);



categories.forEach(function(category) {
  category.onclick = function(event) {
    let newUrl;
    if (event.target.id === "featured") {
      newUrl = productUrl + "?featured=true";
    } else {
      const categoryChosen = event.target.value;
      newUrl = productUrl + `?category=${categoryChosen}`;
    }

    productList.textContent = "";

    renderProducts(newUrl);
  };
});











