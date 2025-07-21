// let a;//declaration
// a=5;//assign or initialize
// a=8;//reassign or reinitialize or update

const mobiledata = [
    {
        item: ["moble", "iphone"],
        image: "Products/iphone 16.jpg",
        company: "Iphone",
        model: "Apple Iphone 16",
        specification: "Blue, 126GB",
        amount: "₹84,900",
        totalamount: "₹89,990"
    },
    {
        image: "Products/iphone 16.jpg",
        company: "Iphone",
        model: "Apple Iphone 13",
        specification: "Blue, 64GB",
        amount: "₹39,900",
        totalamount: "₹49,990"
    },
    {
        image: "Products/iphone 16.jpg",
        company: "Iphone",
        model: "Apple Iphone 14",
        specification: "Blue, 126GB",
        amount: "₹68,900",
        totalamount: "₹78,990"
    },
    {
        image: "Products/samsung S25 ultra.webp",
        company: "Samsung",
        model: "Samsung Galaxy S25 Ultra",
        specification: "Black, 126GB ROM | 12GB RAM",
        amount: "₹1,41,999",
        totalamount: "₹1,50,999"
    },
    {
        image: "Products/pixel-8a.webp",
        company: "Google",
        model: "Google Pixel 8A",
        specification: "Skyblue, 128GB ROM | RAM 8GB",
        amount: "₹37,999 ",
        totalamount: "₹52,990",
    },
    {
        image: "Products/moto g85.webp",
        company: "Motorola",
        model: "Motorola G85 5G",
        specification: "Olive Green, 128 GB | 8 GB RAM",
        amount: "₹15,999 ",
        totalamount: "₹16,999",
    },
    {
        image: "Products/Nothing-2a.jpg",
        company: "Nothing",
        model: "Nothing-2a 5G",
        specification: "Blue, 256 GB | 12 GB RAM)",
        amount: "₹21,999 ",
        totalamount: "₹25,999",
    },
    {
        image: "Products/realme p3x 5g.jpg",
        company: "Realme",
        model: "realme p3x 5g",
        specification: "Midnight Blue, 128 GB | 6 GB RAM",
        amount: "₹21,999",
        totalamount: "₹23,999",
    }
];

const men = [
    {
        id: 1,
        img: "products/men-shirts.webp",
        brand: "Cloth Factory",
        ditail: "Men short t-shirt",
        sizw: "Size: M, Skyblue",
        discount: "₹319",
        totalamount: "₹12,99"
    },
    {
        img: "Products/men-regular-fit-solid-spread-collar-casual-shirt.webp",
        brand: "JUHIL BAZAR",
        ditail: "Men full Shirt",
        sizw: "Size: XXL | Black",
        discount: "₹450",
        totalamount: "₹12,99"
    },
    {
        img: "Products/xl-0-1-clothely-fashion-original-imah5yfy8hj2ye6z.webp",
        brand: "Clothely Fashion",
        ditail: "Men check Shirt",
        sizw: "Size: L | Blue and black",
        discount: "₹455",
        totalamount: "₹999"
    },
    {
        img: "Products/hafe-t-shirt.webp",
        brand: "METRONAUT",
        ditail: "Printed men crew Neck",
        sizw: "Size: L",
        discount: "₹399",
        totalamount: "₹12,99"
    },
    {
        img: "Products/full-shirt.webp",
        brand: "Vebnor",
        ditail: "Men Regular",
        sizw: "Size: M",
        discount: "₹299",
        totalamount: "₹799"
    },
];


// women data
const women = [
    {
        img: "Products/free-emeros-original-imagn.webp",
        brand: "Emeros",
        ditail: "Women Flared Multicolor Viscose Rayon Trousers",
        size: "Size: Free",
        discount: "₹378",
        totalamount: "₹14,99"
    },
    {
        img: "Products/3Buddy Fashion.webp",
        brand: "3Buddy Fashion",
        ditail: "Floral Print Bollywood Lycra Blend Saree",
        size: "Maroon",
        discount: "₹389",
        totalamount: "₹2,599"
    },
    {
        img: "Products/Royal Export.webp",
        brand: "Royal Export",
        ditail: "Women Chanderi Kurta ",
        size: "MaroonSize S, M, L, XL, XXL",
        discount: "₹1,168",
        totalamount: "₹6,999"
    },
    {
        img: "Products/ZWERLON.webp",
        brand: "ZWERLON",
        ditail: "Girls Calf Length Casual Dress",
        size: "Size 9 - 10 Years",
        discount: "₹358",
        totalamount: "₹1,999"
    },
    {
        img: "Products/Women-Visc.webp",
        brand: "PSCHOICE",
        ditail: "Women Viscose Rayon ",
        size: "Size: XS, S, M, L, XL,",
        discount: "₹450",
        totalamount: "₹12,99"
    },
    {
        img: "Products/Indo-Era.webp",
        brand: "Indo Era",
        ditail: "Women Viscose Rayon ",
        size: "Size: XS, S, M, L, XL,",
        discount: "₹999",
        totalamount: "₹6,999"
    },
];

const electronic = [
    {
        img: "Products/boult-original.webp",
        brand: "Boult",
        ditail: "Boult Astra with Quad Mic ENC, 48Hrs Battery",
        specification: "White Opal, True Wireless",
        discount: "₹1,199",
        totalamount: "₹3,499"
    },
    {
        img: "Products/bout-original.webp",
        brand: "BoAt",
        ditail: "boAt Rockerz 430 w/ Beast Mode",
        specification: "Bold Blue, On the Ear",
        discount: "₹1,199",
        totalamount: "₹2,499"
    },
    {
        img: "Products/Asus-tuf.jpeg",
        brand: "ASUS",
        ditail: "ASUS TUF Gaming A15 AMD Ryzen 5",
        specification: "16 GB/512 GB SSD/4 GB",
        discount: "₹59,990",
        totalamount: "₹79,990"
    },
    {
        img: "Products/lg-wasing.webp",
        brand: "LG",
        ditail: "LG 7 kg 5 Star ",
        specification: "Washing Machine Grey, White",
        discount: "₹11,440",
        totalamount: "₹14,199"
    },
    {
        img: "Products/sumsung-smart-tv.jpeg",
        brand: "SAMSUNG",
        ditail: "SAMSUNG 80 cm (32 Inch)",
        specification: "ConnectShare (USB 2.0)",
        discount: "₹14,440",
        totalamount: "₹18,900"
    }
];

const toy = [
    {
        img: "Products/Miss-Chief-Baby-Bunny.webp",
        ditail: "Miss & Chief Baby Bunny Rideon Car with Music,",
        discount: "₹1,999",
        totalamount: "₹4,999"
    },
    {
        img: "Products/Miss-Chief-Spartan.webp",
        ditail: "Miss & Chief Baby Bunny Rideon Car with Music",
        discount: "₹1,049",
        totalamount: "₹4,999"
    },
    {
        img: "Products/Kiddie Castle Portable 8.5 inch LCD Re-Writing.webp",
        ditail: "Kiddie Castle Portable 8.5 inch LCD Re-Writing",
        discount: "₹116",
        totalamount: "₹699"
    },
    {
        img: "Products/CADDLE & TOES Famous Car Remote Control 3D.webp",
        ditail: "CADDLE & TOES Famous Car Remote Control 3D",
        discount: "₹499",
        totalamount: "₹799"
    },
    {
        img: "Products/KrocieToys MOON BALL Crazy Ball.webp",
        ditail: "KrocieToys MOON BALL Crazy Ball",
        discount: "₹99",
        totalamount: "₹149"
    },
];


const container = document.querySelector("#js-data"); // Js data inser in Div
const container_box = document.querySelector(".container-box"); // Frount data display None
const logo = document.getElementById("logo"); //shopcart logo
const phone = document.getElementById("mobile");// nav2 mobile Image
const mens = document.getElementById("men"); // nav2 men image
const womenicon = document.getElementById("WomenData"); //nav2 women image 
const electronicesNav = document.getElementById("electronicesNav"); // nav2 electronies image
const toys = document.getElementById("toys"); // nav2 toy image
const search = document.getElementById("search"); // nav1 search input 
const searchBtn = document.getElementById("search-btn"); // nav1 search button


// that is firunt page mobile data
const shopingBox = document.querySelector(".shoping-box");
let htmlcontent = "";
mobiledata.forEach(val => {
    htmlcontent += ` <div class="cover-box">
                        <div class="box-img">
                            <div class="image-mobile">
                            <img src="${val.image}" alt="">
                            </div>
                            <div class="cart-btn">
                                <button class="minus">-</button>
                                <input class="inp-value" type="text" readonly value="1">
                                <button class="plus">+</button>
                            </div>
                        </div>
                        <div class="product-dital">
                            <h3>${val.company}</h3>
                            <div class="dital-all">
                                <p>${val.model}</p>
                                <p>${val.specification}</p>
                                <p id="price">${val.amount} <del id="total">${val.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button onclick="c()">Cart</button>
                                <button >Buy</button>
                            </div>
                        </div>
                    </div>`

});
shopingBox.innerHTML = htmlcontent;

phone.addEventListener("click", () => {
    container_box.style.display = "none";
    container.style.display = "flex";
    container.innerHTML = htmlcontent;


    // that is plus and minus value increase
    const plus = document.querySelectorAll(".plus");
    const inpValue = document.querySelectorAll(".inp-value");
    const minus = document.querySelectorAll(".minus");

    let val = 1;
    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", function () {
            val++;
            if (val >= 5) {
                val = 5;
                alert("maximum Order 5");
            }
            inpValue[i].value = val;
        });

        minus[i].addEventListener("click", function () {
            val--;
            if (val <= 0) {
                val = 1;
                alert("minimum Order 1");
            }
            inpValue[i].value = val;
            console.log(val);
        })
    }
})

// that is men data
let mendiv = document.getElementById("men-div");
let mendataInsert = "";
men.forEach(mendata => {
    mendataInsert += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${mendata.img}" alt="">
                        </div>
                        <div class="clothes-dital">
                            <h3>${mendata.brand}</h3>
                            <div class="clothes-all-dital">
                                <p>${mendata.ditail}</p>
                                <p>${mendata.size}</p>
                                <p id="price">${mendata.discount} <del id="total">${mendata.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button>Cart</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>`
})
mendiv.innerHTML = mendataInsert;

mens.addEventListener("click", function () {
    container_box.style.display = "none";
    container.style.display = "flex";
    container.innerHTML = mendataInsert;
})



// that is women data
let womenID = document.getElementById("women");
let wo = "";
women.forEach((w, index) => {
    if (index >= 4) {
        return;
    }
    // console.log(index);
    wo += ` <div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${w.img}" alt="">
                        </div>
                        <div class="clothes-dital">
                            <h3>${w.brand}</h3>
                            <div class="clothes-all-dital">
                                <p>${w.ditail}</p>
                                <p>${w.size}</p>
                                <p id="price">${w.discount} <del id="total"> ${w.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button>Cart</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>`
});
womenID.innerHTML = wo;
womenicon.addEventListener("click", function () {
    container_box.style.display = "none";
    container.style.display = "flex";
    container.innerHTML = wo;
})


// this is electronices div section
let electronicdiv = document.getElementById("electronices");
let el = "";
electronic.forEach(e =>
    el += ` <div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${e.img}" alt="">
                        </div>
                        <div class="clothes-dital">
                            <h3>${e.brand}</h3>
                            <div class="clothes-all-dital">
                                <p>${e.ditail}</p>
                                <p>${e.specification}</p>
                                <p id="price">${e.discount} <del id="total"> ${e.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button>Cart</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>`
);
electronicdiv.innerHTML = el;
electronicesNav.addEventListener("click", () => {
    container_box.style.display = "none";
    container.style.display = "flex";
    container.innerHTML = el;
})


// toy 
let toydiv = document.getElementById("toy");
let Toygame = ""
toy.forEach(t => {
    Toygame += ` <div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${t.img}" alt="">
                        </div>
                        <div class="clothes-dital">
                            <div class="clothes-all-dital">
                                <p>${t.ditail}</p>
                                <p id="price">${t.discount} <del id="total"> ${t.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button>Cart</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>`
});
toydiv.innerHTML = Toygame;
toys.addEventListener("click", function () {
    container_box.style.display = "none";
    container.style.display = "flex";
    container.innerHTML = Toygame;
})

// this nav log
logo.addEventListener("click", () => {
    container_box.style.display = "block";
    container.style.display = "none";
});



// search
searchBtn.addEventListener("click", function () {
    console.log("clicked");

    container_box.style.display = "none";
    container.style.display = "flex";
    let searchvalue = search.value;
    let find = mobiledata.filter((finddata) => { return finddata.company === searchvalue });
    console.log(find);
    for (const ind in find) {
        console.log("image" + find[ind].model);
        container.innerHTML += `<div class="cover-box">
                            <div class="box-img">
                                <div class="image-mobile">
                                <img src="${find[ind].image}" alt="">
                                </div>
                                <div class="cart-btn">
                                    <button class="minus">-</button>
                                    <input class="inp-value" type="text" readonly value="1">
                                    <button class="plus">+</button>
                                </div>
                            </div>
                            <div class="product-dital">
                                <h3>${find[ind].company}</h3>
                                <div class="dital-all">
                                    <p>${find[ind].model}</p>
                                    <p>${find[ind].specification}</p>
                                    <p id="price">${find[ind].amount} <del id="total">${find[ind].totalamount}</del></p>
                                </div>
                                <div class="box-btn">
                                    <button onclick="c()">Cart</button>
                                    <button >Buy</button>
                                </div>
                            </div>
                        </div>`;
    }
})


    // if(find[ind].model && find[ind].specification){
    //             InsertJsData.innerHTML += `<div class="cover-box">
    //             <div class="box-img">
    //             <div class="image-mobile">
    //             <img src="${find[ind].img}" alt="">
    //             </div>
    //             </div>
    //             <div class="product-dital">
    //             <h3>${find[ind].brand}</h3>
    //             <div class="dital-all">
    //             <p>${find[ind].model}</p>
    //             <p>${find[ind].specification}</p>
    //             <p id="price">${find[ind].price} <del id="total">${find[ind].totalamount}</del></p>
    //             </div> 
    //             <div class="box-btn">
    //             <button onclick="c(${ind})">Cart</button>
    //             <button onclick="buy(${ind})">Buy</button>
    //             </div>
    //             </div>
    //             </div>`;
    //         }
    //         else{
    //             console.log(find[ind]);
                
    //             InsertJsData.innerHTML = `<div class="clothes-box">
    //                     <div class="clothes-img">
    //                         <img src="${find[ind].img}" alt="">
    //                     </div>
    //                     <div class="clothes-dital">
    //                         <h3>${find[ind].brand || ""}</h3>
    //                         <div class="clothes-all-dital">
    //                             <p>${find[ind].ditail}</p>
    //                             <p>${find[ind].specification || find[ind].size || ""}</p>
    //                             <p id="price">${find[ind].price} <del id="total">${find[ind].totalamount}</del></p>
    //                         </div>
    //                         <div class="box-btn">
    //                             <button onclick="c(${ind})">Cart</button>
    //                             <button onclick="buy(${ind})">Buy</button>
    //                         </div>
    //                     </div>
    //                 </div>`;
    //         }




//   `<div class="cart-ditail">
//                         <h3>${v.brand || ""}</h3>
//                             <p>${v.model || v.ditail}</p>
//                             <p>${v.specification || v.size}</p>
//                             </div>
//                             </div>
//                             <div class="all-item">${v.price}</div>
//                             <div class="all-item">
//                             <div class="cart-btn">
//                             <button class="minus">-</button>
//                             <input class="inp-value" type="text" readonly value="1">
//                             <button class="plus">+</button>
//                             </div>
//                             </div>
//                             <div class="all-item">₹1,41,999</div>
//                             <div class="all-item">
//                             <button onclick="remove()">Remove</button><br>
//                             <button onclick="buy(${k})">Buy</button>
//                             </div>
//                             </div>`;        



/*    
    add to cart data

    cart.forEach((v, k) => {
        ins += ` 
        <div class="cart-head">
            <div class="head-item">Item</div>
            <div class="head-item">Price</div>
            <div class="head-item">Quantity</div>
            <div class="head-item">Total</div>
            <div class="head-item"></div>
        </div> 
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
            <div class="all-item">${v.price}</div>
                <div class="all-item">
                    <div class="cart-btn">
                        <button class="minus">-</button>
                        <input class="inp-value" type="text" readonly value="1">
                        <button class="plus">+</button>
                    </div>
                </div>
                <div class="all-item">₹1,41,999</div>
                <div class="all-item">
                        <button onclick="">Remove</button><br>
                        <button onclick="buy(${k})">Buy</button>
                </div>
            </div>`;
    });
    a.innerHTML = ins;
    render()

*/