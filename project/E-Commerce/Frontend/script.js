// -- index.html file --
let home_page = document.getElementById("home-page"); // select body element 

// nav 1
const searchbar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn")

let nav2 = document.querySelector(".nav2"); // nav2
const InsertJsDatas = document.getElementById("js-data"); // insert Js all data
const HomeContainer = document.querySelector(".container-box");


// -- productsDital.html file --
const productDetailPage = document.getElementById("product-Detail");
const productsDital = document.getElementById("products-Ditail");



// -- checkout-page.html file --
let checkout_page = document.getElementById("checkout-page");
let checkoutContainer = document.querySelector("#checkout-container");

// Show addToCart
let notcart = document.getElementById("notCart"); // emty container
let cartHead = document.querySelector(".cart-head"); // item card header
let insercartData = document.getElementById("cart-cover"); // insert Card in body
let AddCart = document.getElementById("addCart"); // AddTocart div element select

function Cartfun() {
    let checkAddCart = window.getComputedStyle(AddCart).display; // check addTocart display property

    if (home_page) {
        if (checkAddCart === "none") {

            HomeContainer.style.display = "none";
            InsertJsDatas.style.display = "none";
            AddCart.style.display = "block";
            nav2.style.display = "none";

            AddToCartProducts()
        } else {
            if (!InsertJsDatas.innerHTML == "") {
                HomeContainer.style.display = "none";
            } else {
                HomeContainer.style.display = "block";
            }
            AddCart.style.display = "none";
            nav2.style.display = "flex";
            InsertJsDatas.style.display = "flex";
        }
    }

    else if (productDetailPage) {
        if (checkAddCart === "none") {
            AddCart.style.display = "block";
            productsDital.style.display = "none";
            AddToCartProducts()
        } else {
            productsDital.style.display = "flex";
            AddCart.style.display = "none";
        }
    }
    else if (checkout_page) {
        if (checkAddCart === "none") {
            AddCart.style.display = "block";
            checkoutContainer.style.display = "none";
            AddToCartProducts()
        } else {
            checkoutContainer.style.display = "flex";
            AddCart.style.display = "none";
        }
    }
}

function AddToCartProducts() {
    let cart = JSON.parse(localStorage.getItem("cartData")) || [];
    let cardIns = "";

    if (cart.length === 0) {
        notcart.style.display = "flex";
        cartHead.style.display = "none";
        insercartData.innerHTML = "";
        return;
    }

    cart.forEach((v, index) => {
        let quantity = v.quantity || 1;
        let total = v.price * quantity;

        cardIns += `  
        <div class="cart-all-item" id="cart-data">
            <div class="all-item">
                <div class="cart-img">
                    <img src="${v.img}" alt="">
                </div>
                <div class="cart-ditail">
                    <h3>${v.brand || ""}</h3>
                    <p>${v.model || v.ditail}</p>
                    <p>${v.specification || v.size}</p>
                </div>
            </div>
            <div class="all-item">₹${v.price.toLocaleString('en-IN')}</div>
                <div class="all-item">
                    <div class="cart-btn">
                        <button class="minus" onclick="quantityBtn(${index}, -1)">-</button>
                        <input class="inp-value" type="text" readonly value="${quantity}">
                        <button class="plus" onclick="quantityBtn(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="all-item">₹${total.toLocaleString('en-IN')}</div>
                <div class="all-item">
                        <button onclick="remove(${index})">Remove</button><br>
                        <button onclick="buy(${v.id - 1})">Buy</button>
                </div>
            </div>`;
    });
    insercartData.innerHTML = cardIns;
}

// quantity update
function quantityBtn(index, update) {
    let cart = JSON.parse(localStorage.getItem('cartData')) || [];

    cart[index].quantity = (cart[index].quantity || 1) + update;

    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }

    localStorage.setItem('cartData', JSON.stringify(cart));
    AddToCartProducts()
}

// remove card in addToCart
function remove(index) {
    let cart = JSON.parse(localStorage.getItem("cartData")) || [];
    cart.splice(index, 1)
    localStorage.setItem("cartData", JSON.stringify(cart));
    AddToCartProducts()
}



// search function 

searchBtn.addEventListener("click", () => {
    let searchLowerCase = searchbar.value.toLowerCase();

    let SearchItemCheck = Data.filter((v, k) => {
        if (v.item && v.item.includes(searchLowerCase)) {
            return v
        }
    })

    // OLD DATA REMOVE
    sessionStorage.removeItem("searchStoreItem");

    // NEW DATA STORE
    sessionStorage.setItem("searchStoreItem", JSON.stringify(SearchItemCheck));

    if (home_page) {
        if (searchLowerCase.trim() === "") {
            HomeContainer.style.display = "block";
        } else {
            HomeContainer.style.display = "none";
            InsertJsDatas.style.display = "flex";
            AddCart.style.display = "none";
        }
        searchFunction()
    }

    else if (productDetailPage) {
        window.location.href = "index.html";
    }

    else if (checkout_page) {
        console.log(JSON.parse(sessionStorage.getItem("searchStoreItem")) || []);
        
        // window.location.href = "index.html";
    }
})

function searchFunction() {
    let showItems = JSON.parse(sessionStorage.getItem("searchStoreItem")) || [];
    InsertJsData.innerHTML = "";

    showItems.forEach((v, i) => {
        if (v.model && v.specification) {
            InsertJsData.innerHTML += `<div class="cover-box">
                            <div class="box-img">
                                <div class="image-mobile">
                                <img src="${v.img}" alt="" onclick="buy(${v.id - 1})">
                                </div>
                            </div>
                            <div class="product-dital">
                                <h3>${v.brand || ""}</h3>
                                <div class="dital-all">
                                    <p>${v.model || v.ditail}</p>
                                    <p>${v.specification || v.id}</p>
                                    <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
                                </div>
                                <div class="box-btn">
                                    <button onclick="c(${i})">Cart</button>
                                    <button onclick="buy(${v.id - 1})">Buy</button>
                                </div>
                            </div>
                        </div>`;
        } else {
            InsertJsData.innerHTML += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${v.img}" alt="" onclick="buy(${v.id - 1})">
                        </div>
                        <div class="clothes-dital">
                            <h3>${v.brand || ""}</h3>
                            <div class="clothes-all-dital">
                                <p>${v.ditail}</p>
                                <p>${v.specification || v.size || ""}</p>
                                <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
                            </div>
                            <div class="box-btn">
                                <button onclick="c(${i})">Cart</button>
                                <button onclick="buy(${v.id - 1})">Buy</button>
                            </div>
                        </div>
                    </div>`;
        }
    })
}

// --- End Of Search bar ---


// index window load function 
if (home_page) {
    window.onload = function () {

        let searchData = JSON.parse(sessionStorage.getItem("searchStoreItem"));

        if (searchData && searchData.length > 0) {
            HomeContainer.style.display = "none";
            InsertJsDatas.style.display = "flex";
            searchFunction();
        } else if (searchData && searchData.length === 0) {
            HomeContainer.style.display = "block";
            InsertJsDatas.style.display = "none";
        }
    }
}



