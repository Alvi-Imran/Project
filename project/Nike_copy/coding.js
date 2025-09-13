// it is search button function use//
function search(){
    document.getElementById("search-element").style = "display:block";
}

function cls(){
    document.getElementById("search-element").style = "display:none";
}



// first slider  function use
const slid = document.getElementById("carousel");

const width = 150;
const padding = 10;

function prev(){
    slid.scrollLeft -= width + padding;
}

function  next(){
    slid.scrollLeft += width + padding;
}


// tow slider function 
const slid2 = document.getElementById("slider-2");
let wid = 200;
let pad = 10;
function move_left(){
    slid2.scrollLeft -= wid + pad;   
}

function move_right(){
    slid2.scrollLeft += wid + pad;

}

// three  slider function 
const slid3 = document.getElementById("three-slide");

let widths = 150;
let paddings = 10;
function prevbtn1(){    
    console.log(widths + paddings);
    
    slid3.scrollLeft -= widths + paddings;
}
function nextbtn1(){
    slid3.scrollLeft += widths + paddings;
}

// start for slider
const slid4 = document.getElementById("member-items");
let wid4 = 200;
let pad4 = 10;
function move_left4(){   
    slid4.scrollLeft -= wid4 + pad4;
}

function move_right4(){
    slid4.scrollLeft += wid4 + pad4;
}



// small screen size 425px 
let nav_two = document.querySelector(".nav-tow");
let Body = document.querySelector("body");

// open nav menu
function openmenu(){
    Body.style.overflowY = "hidden"
    nav_two.style.display = "flex";
}

// close nav menu
function closeNav(){
    nav_two.style.display = "none";
    Body.style.overflowY = "visible"
}

// footer help section ul hiden and show
$(document).ready(function(){
    $(".toggle-ul").click(function(){
        if(window.matchMedia("(max-width:768px)").matches){
            $(this).next(".footer-ul").toggle()
        }
    })
})

// console.log(window.matchMedia("(max-width:425px)").matches);
