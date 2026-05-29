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
setInterval(next, 3500);

// toggle button
const toggle = document.querySelector(".bi-list");
const navALL = document.querySelector(".nav-all-cover");

toggle.addEventListener("click", function () {
    navALL.classList.toggle('active');
})


// nav 1
const logo = document.getElementById("logo");

// nav2
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

    // OLD DATA REMOVE FOR SEARCH 
    sessionStorage.removeItem("searchStoreItem");
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
    InsertJsData.innerHTML = phoneInsert;
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


// ------ search function ------
// searchBtn.addEventListener("click", () => {
//     let searchLowerCase = searchbar.value.toLowerCase();

//     let SearchItemCheck = Data.filter((v, k) => {
//         if (v.item && v.item.includes(searchLowerCase)) {
//             return v
//         }
//     })

//     if (searchLowerCase.trim() === "") {
//         containerBox.style.display = "block";
//     } else {
//         containerBox.style.display = "none";
//         InsertJsData.style.display = "flex";
//         cartinsrt.style.display = "none";

//         // OLD DATA REMOVE
//         localStorage.removeItem("searchStoreItem");

//         // NEW DATA STORE
//         localStorage.setItem("searchStoreItem", JSON.stringify(SearchItemCheck));
//         searchFunction()
//     }

// })

// function searchFunction() {
//     let showItems = JSON.parse(localStorage.getItem("searchStoreItem")) || [];
//     InsertJsData.innerHTML = "";

//     showItems.forEach((v, i) => {
//         if (v.model && v.specification) {
//             InsertJsData.innerHTML += `<div class="cover-box">
//                             <div class="box-img">
//                                 <div class="image-mobile">
//                                 <img src="${v.img}" alt="" onclick="buy(${v.id -1})">
//                                 </div>
//                             </div>
//                             <div class="product-dital">
//                                 <h3>${v.brand || ""}</h3>
//                                 <div class="dital-all">
//                                     <p>${v.model || v.ditail}</p>
//                                     <p>${v.specification || v.id}</p>
//                                     <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
//                                 </div>
//                                 <div class="box-btn">
//                                     <button onclick="c(${i})">Cart</button>
//                                     <button onclick="buy(${i})">Buy</button>
//                                 </div>
//                             </div>
//                         </div>`;
//         } else {
//             InsertJsData.innerHTML += `<div class="clothes-box">
//                         <div class="clothes-img">
//                             <img src="${v.img}" alt="" onclick="buy(${v.id -1})">
//                         </div>
//                         <div class="clothes-dital">
//                             <h3>${v.brand || ""}</h3>
//                             <div class="clothes-all-dital">
//                                 <p>${v.ditail}</p>
//                                 <p>${v.specification || v.size || ""}</p>
//                                 <p id="price">₹${v.price.toLocaleString('en-IN')} <del id="total">₹${v.totalamount.toLocaleString('en-IN')}</del></p>
//                             </div>
//                             <div class="box-btn">
//                                 <button onclick="c(${i})">Cart</button>
//                                 <button onclick="buy(${i})">Buy</button>
//                             </div>
//                         </div>
//                     </div>`;
//         }
//     })
// }

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


// Product All Detail 
function buy(k) {
    const buyItem = Data[k]
    localStorage.setItem("showdetail", JSON.stringify([buyItem]));
    window.location.href = "productdetail.html";
}
