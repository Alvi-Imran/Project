const checkout_container = document.getElementById("checkout-container");
const placeOrder = document.getElementById("placeOrder");
const orderConform = document.getElementById("order-conform");

// get LocalStorge Data
const checkoutData = JSON.parse(localStorage.getItem("showdetail"));

const img = document.getElementById("img");
const detail = document.getElementById("detail");
const price = document.getElementById("price")
        
checkoutData.forEach(element => {
    // console.log(element);
    if(element.img && element.ditail){
        img.src = element.img;
        detail.innerHTML = element.ditail;
        price.innerHTML = element.price
    }
    else{
        img.src = element.img;
        detail.innerHTML = element.specification;
        price.innerHTML = element.price;
    
    }
    
});

placeOrder.addEventListener("click",function(){
    checkout_container.style.display ="none";
    orderConform.style.display = "flex";
})