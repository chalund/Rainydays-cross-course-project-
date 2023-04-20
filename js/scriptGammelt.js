//brukes ikke

const btnSizeList = document.querySelectorAll(".btn-size");

btnSizeList.forEach(btnSize => {
    btnSize.addEventListener("click", () => {
    document.querySelector(".btn-clicked")?.classList.remove("btn-clicked")
    btnSize.classList.add("btn-clicked");
});
})



//dette er fra productDetails siden innerHTML

const detailsContainer = document.querySelector(".overview-page");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const orderSummary = document.querySelector(".order-summary-content");

const url = "https://wordpress.charlottelund.no/wp-json/wc/store/products/" + id;

async function getProduct() {
    try{
        const response = await fetch(url);
        const details = await response.json();

      

        console.log(details)

      

        detailsContainer.innerHTML += `
                                    <div class="overview-jacket">
                                        <img src="${details.images[0].src}" alt="${details.name}" class="overview-jacketImg">
                                        <div class="overview-details">
                                        <h2>${details.name}</h2>
                                        <h3>${details.description}</h3>
                                        <h3>${details.prices.price} Kr</h3>
                                        <p>${details.attributes}</p>
                                        <p>${details.short_description} </p>
                                            <div class="overview-button">
                                            <a href="../product/customerDetails.html" class="cta cta-button">Buy</a>
                                            </div>
                                    </div>`; 
    } catch(error) {
        console.log(error);
    }
}
getProduct();



