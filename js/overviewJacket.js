const detailsContainer = document.querySelector(".overview-page");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://charlottelund.no/wp-json/wc/store/products/" + id;

async function getProduct() {
    try{
        const response = await fetch(url);
        const details = await response.json();
        console.log(details);

        detailsContainer.innerHTML += `
                                    <div class="overview-jacket">
                                        <img src="${details.images[0].src}" alt="${details.name}" class="overview-jacketImg">
                                        <div class="overview-details">
                                        <h2>${details.name}</h2>
                                        <h3>${details.short_description}</h3>
                                        <h3>${details.prices}</h3>
                                        <p>${details.variations.variations}
                                        <p>${details.description} </p>
                                        <div class="overview-button">
                                        <a href="../product/customerDetails.html" class="cta cta-button">Buy</a>
                                        </div>
                                    </div>
                               
                                `; 

    }

    catch(error) {
        console.log(error);
    }
}

getProduct();


const orderSummary = document.querySelector(".order-summary-content");
