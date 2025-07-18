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
    console.log("ji");
    
    slid3.scrollLeft -= widths + paddings;
}
function nextbtn1(){
    console.log("hsjsjf")
    slid3.scrollLeft -= widths + paddings;
}

// start for slider
const slid4 = document.getElementById("member-items");
let wid4 = 200;
let pad4 = 10;
function moveleft(){
    slid2.scrollLeft -= wid4 + pad4;
}

function moveright(){
    slid2.scrollLeft += wid4 + pad4;

}





