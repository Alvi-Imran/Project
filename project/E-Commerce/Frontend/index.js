// shoping banner hero setion
let banner = [
    "banner/boult-original-Photoroom.png",
    "banner/iphone 16-Photoroom.png",
    "banner/Miss-Chief-Spartan-Photoroom.png",
    "banner/men-shirts-Photoroom.png",
    "banner/free-emeros-original-imagn-Photoroom.png"
];

let bannerURL = document.getElementById("hero-product");
let index = 0;

function next() {
    index++
    if (index >= banner.length) {
        index = 0;
    }
    bannerURL.src = banner[index];
}

function prev() {
    index--
    if (index == -1) {
        index = 3;
    }
    bannerURL.src = banner[index];
}
// setInterval(next, 3500);

// toggle button
const toggle = document.querySelector(".bi-list");
const navALL = document.querySelector(".nav-all-cover");

toggle.addEventListener("click",function(){
        navALL.classList.toggle('active'); 
})





// nav 1
const logo = document.getElementById("logo");
const searchbar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn")
const cartNav = document.querySelector(".cart");
// nav2
let nav2 = document.querySelector(".nav2");
const mobileIcon = document.getElementById("mobile");
const menIcon = document.getElementById("men");
const womenIcon = document.getElementById("WomenData");
const electronicIcon = document.getElementById("electronicesNav");
const toyIcon = document.getElementById("toys");

// body
const InsertJsData = document.getElementById("js-data");
const cartinsrt = document.getElementById("addCart");
const containerBox = document.querySelector(".container-box");
const mobileDiv = document.querySelector(".shoping-box");
const menDiv = document.getElementById("men-div");
const womenDiv = document.getElementById("women");
const electronicesDiv = document.getElementById("electronices");
const toyDiv = document.getElementById("toy");


// logo function display none and block
logo.addEventListener("click", function () {
    InsertJsData.style.display = "none";
    containerBox.style.display = "block";
    cartinsrt.style.display = "none";
});



// body insrt mobile data
let phoneInsert = "";
//body insrt men data
let menInsert = "";
// Body Insert women Data
let womenInsert = "";
// Body Insert electronic Data
let electronicInsert = "";
// body insert Toy data
let toyInsert = "";

// display all Products
Data.forEach((v, k) => {   
    if (v.item.includes("mobile")) {
        phoneInsert += ` <div class="cover-box">
                            <div class="box-img">
                                <div class="image-mobile">
                                <img src="${v.img}" alt="" onclick="buy(${k})">
                                </div>
                            </div>
                            <div class="product-dital">
                                <h3>${v.brand}</h3>
                                <div class="dital-all">
                                    <p>${v.model}</p>
                                    <p>${v.specification}</p>
                                    <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
                                </div>
                                <div class="box-btn">
                                    <button onclick="c(${k})">Cart</button>
                                    <button onclick="buy(${k})">Buy</button>
                                </div>
                            </div>
                        </div>`

    }

    else if (v.item.includes("men clothes")) {
        menInsert += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${v.img}" alt="" onclick="buy(${k})">
                        </div>
                        <div class="clothes-dital">
                            <h3>${v.brand}</h3>
                            <div class="clothes-all-dital">
                                <p>${v.ditail}</p>
                                <p>${v.size}</p>
                                <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
                            </div>
                            <div class="box-btn">
                                <button onclick="c(${k})">Cart</button>
                                 <button onclick="buy(${k})">Buy</button>
                            </div>
                        </div>
                    </div>`
    }
    else if (v.item.includes("women clothes")) {
        womenInsert += `<div class="clothes-box">
                            <div class="clothes-img">
                                <img src="${v.img}" alt="" onclick="buy(${k})">
                            </div>
                            <div class="clothes-dital">
                                <h3>${v.brand}</h3>
                                <div class="clothes-all-dital">
                                    <p>${v.ditail}</p>
                                    <p>${v.size}</p>
                                    <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
                                </div>
                                <div class="box-btn">
                                    <button onclick="c(${k})">Cart</button>
                                     <button onclick="buy(${k})">Buy</button>
                                </div>
                            </div>
                        </div>`
    }
    else if (v.item.includes("electronic")) {
        // console.log(v, v.image, v.item.includes("electronic"))
        electronicInsert += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${v.img}" alt="" onclick="buy(${k})">
                        </div>
                        <div class="clothes-dital">
                            <h3>${v.brand}</h3>
                            <div class="clothes-all-dital">
                            <p></p>
                            <p>${v.ditail}</p>
                                <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
                            </div>
                            <div class="box-btn">
                                <button onclick="c(${k})">Cart</button>
                                <button onclick="buy(${k})">Buy</button>
                            </div>
                        </div>
                    </div>`;
    }
    else if (v.item.includes("toy")) {
        toyInsert += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${v.img}" alt="" onclick="buy(${k})">
                        </div>
                        <div class="clothes-dital">
                            <h3></h3>
                            <div class="clothes-all-dital">
                                <p>${v.ditail}</p>
                                <p></p>
                                <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
                            </div>
                            <div class="box-btn">
                                <button onclick="c(${k})">Cart</button>
                                <button onclick="buy(${k})">Buy</button>
                            </div>
                        </div>
                    </div>`
    }
});

mobileDiv.innerHTML = phoneInsert;
mobileIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    // InsertJsData.innerHTML = phoneInsert;
    // console.log(phoneInsert);
    Data.forEach((v, k) => {
        if (v.item.includes("mobile")) {
            InsertJsData.innerHTML += `<div class="cover-box">
            <div class="box-img">
            <div class="image-mobile">
            <img src="${v.img}" alt="">
            </div>
            </div>
            <div class="product-dital">
            <h3>${v.brand}</h3>
            <div class="dital-all">
            <p>${v.model}</p>
            <p>${v.specification}</p>
            <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
            </div>
            <div class="box-btn">
            <button onclick="c(${k})">Cart</button>
            <button onclick="buy(${k})">Buy</button>
            </div>
            </div>
            </div>`
        }
    })

});


menDiv.innerHTML = menInsert;
menIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = menInsert;
});


womenDiv.innerHTML = womenInsert;
womenIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = womenInsert;
});


electronicesDiv.innerHTML = electronicInsert;
electronicIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = electronicInsert;
});


toyDiv.innerHTML = toyInsert;
toyIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = toyInsert;
});


// search function
searchBtn.addEventListener("click", () => {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    // cartNav.style.display = "none";

    InsertJsData.innerHTML = "";
    let searchvalue = searchbar.value.toLowerCase();
    let find = Data.filter((v, k) => {
        if (Array.isArray(v.item) && v.item.includes(searchvalue)) {
            return v
        }
    })
    for (const ind in find) {
        if (find[ind].model && find[ind].specification) {
            InsertJsData.innerHTML += `<div class="cover-box">
                            <div class="box-img">
                                <div class="image-mobile">
                                <img src="${find[ind].img}" alt="" onclick="buy(${ind})">
                                </div>
                            </div>
                            <div class="product-dital">
                                <h3>${find[ind].brand || ""}</h3>
                                <div class="dital-all">
                                    <p>${find[ind].model || find[ind].ditail}</p>
                                    <p>${find[ind].specification || find[ind]}</p>
                                    <p id="price">₹${find[ind].price.toLocaleString('en-IN')} <del id="total">₹${find[ind].totalamount.toLocaleString('en-IN')}</del></p>
                                </div>
                                <div class="box-btn">
                                    <button onclick="c(${ind})">Cart</button>
                                    <button onclick="buy(${ind})">Buy</button>
                                </div>
                            </div>
                        </div>`;
        }
        else {
            InsertJsData.innerHTML += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${find[ind].img}" alt="" onclick="buy(${ind})">
                        </div>
                        <div class="clothes-dital">
                            <h3>${find[ind].brand || ""}</h3>
                            <div class="clothes-all-dital">
                                <p>${find[ind].ditail}</p>
                                <p>${find[ind].specification || find[ind].size || ""}</p>
                                <p id="price">₹${find[ind].price.toLocaleString('en-IN')} <del id="total">₹${find[ind].totalamount.toLocaleString('en-IN')}</del></p>
                            </div>
                            <div class="box-btn">
                                <button onclick="c(${ind})">Cart</button>
                                <button onclick="buy(${find[ind].id-1})">Buy</button>
                            </div>
                        </div>
                    </div>`;
        }

    }
})
// --- End Of Search bar ---



// add to cart option
function c(k) {
    cart = JSON.parse(localStorage.getItem('cartData')) || [];
    let cartItem = Data[k];

    const itemcheck = cart.some(item => item.id === cartItem.id);
    if (!itemcheck) {
        cart.unshift(cartItem);
        localStorage.setItem('cartData', JSON.stringify(cart));
    } else {
        alert("Item is already in the cart")
    }
};


// Show addToCart
let notcart = document.getElementById("notCart"); // emty container
let cartHead = document.querySelector(".cart-head"); // item card header
let insercartData = document.getElementById("cart-cover"); // insert Card in body

// show card
function ShowCart() {   
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
                        <button onclick="buy(${v.id-1})">Buy</button>
                </div>
            </div>`;
    });
    insercartData.innerHTML = cardIns;
}

// quantity update
function quantityBtn(index, update){
    let cart = JSON.parse(localStorage.getItem('cartData')) || [];

    cart[index].quantity = (cart[index].quantity || 1 ) + update;

    if(cart[index].quantity < 1){
        cart[index].quantity = 1;
    }

    localStorage.setItem('cartData',JSON.stringify(cart));
    ShowCart()
}


// click Cart icon function
function Cartfun() {
    nav2.style.display = "none";
    navALL.classList.toggle('active'); 
    containerBox.style.display = "none"
    cartinsrt.style.display = "block";
    InsertJsData.style.display = "none";
    notcart.style.display = "none";
    ShowCart() // call showCart function
}

// remove card in addToCart
function remove(index) {
    let cart = JSON.parse(localStorage.getItem("cartData")) || [];
    cart.splice(index, 1)
    localStorage.setItem("cartData", JSON.stringify(cart));
    ShowCart()
}


// --- End Add to Cart  -- //

// Product All Detail 

function buy(k) {        
    const buyItem = Data[k]
    localStorage.setItem("showdetail", JSON.stringify([buyItem]));
    window.location.href = "productdital.html";
}

// console.log(window.screen)

