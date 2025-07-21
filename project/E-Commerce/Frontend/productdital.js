//    // nav 1
// const logo = document.getElementById("logo");
// const searchbar = document.getElementById("search");
// const searchBtn = document.getElementById("search-btn")


const buyBtn = document.getElementById("buynow");


// all thumbnail container 
const all_img = document.getElementById("all-img");
const main_img = document.getElementById("product-main-img");
const brand = document.getElementById("brand");
const model = document.getElementById("model")
const Detail_p = document.getElementById("Detail-p");
const sp = document.getElementById("sp");
const desc_p = document.getElementById("desc-p")
const priceQuantityBox = document.querySelector(".price-quantity-box")

// localStorage Data getData
let all = JSON.parse(localStorage.getItem("showdetail")) || [];

let quantityPrice = "";   

all.forEach((v, k) => {

    main_img.src = v.img
    brand.innerHTML = v.brand || "";
    desc_p.innerHTML = v.discription;
    // price.innerHTML = `₹${v.price.toLocaleString('en-In')}`;

    // thumbnai image create
    v.all_thum.forEach((v, k) => {
        let thumImg = document.createElement("img");
        thumImg.src = v;
        thumImg.onclick = () => {
            main_img.src = v;
        }
        all_img.appendChild(thumImg)
    })

    if (v.img && v.model) {
        model.innerHTML = v.model;
    }
    else if (v.img && v.ditail) {
        Detail_p.innerHTML = v.ditail;
    }
    else if (v.img && v.specification) {
        sp.innerHTML = v.specification
    }
    else if (v.img && v.size) {
        sp.innerHTML = v.size;
    }
    else {
        // sp.innerHTML = ""
    }

     let total = v.price * v.quantity; // total 

    quantityPrice += `<p id="pri">Price: ₹${v.price.toLocaleString('en-In')}</p>
                    <div class="quantity-box">
                        <button onclick="quantity(${k},-1)">-</button>
                        <input type="text" readonly value="${v.quantity}"> 
                        <button onclick="quantity(${k}, 1)">+</button>
                    </div>
                    <p>Total Price:${total}</p>
                `
})
priceQuantityBox.innerHTML = quantityPrice;


function quantity(k,update){
    all = JSON.parse(localStorage.getItem('showdetail')) || [];
    all[k].quantity = (all[k].quantity || 1) + update;
    if(all[k].quantity < 1){
        all[k].quantity = 1;
    }

    localStorage.setItem('showdetail',JSON.stringify(all));

    let quantityPrice = "";

    all.forEach((v,k)=>{
        let total = v.price * v.quantity;
        quantityPrice += `<p id="pri">Price: ₹${v.price.toLocaleString('en-In')}</p>
                    <div class="quantity-box">
                        <button onclick="quantity(${k},-1)">-</button>
                        <input type="text" readonly value="${v.quantity}"> 
                        <button onclick="quantity(${k}, 1)">+</button>
                    </div>
                    <p>Total Price: ₹${total.toLocaleString('en-In')}</p>`;
    })
priceQuantityBox.innerHTML = quantityPrice;
}


buyBtn.addEventListener("click", function () {
    window.location.href = "checkout-page.html";
}) 