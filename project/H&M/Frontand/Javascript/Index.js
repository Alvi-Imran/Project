
// footer ul list targate 
let ulToggle = document.querySelectorAll(".ditail-head");
let UlList = document.querySelectorAll(".footer-ul");

$(document).ready(function () {

    // Nav toggle 
    $(".bi-list-nested").click(function (check) {

        check.stopPropagation()

        $(".last-nav").toggle()
        $("body").toggleClass("bodyfun");
    })


    $("body").click(function () {
        $(".last-nav").hide();
        $("body").removeClass("bodyfun");
    });



    console.log(window.matchMedia("(max-width:768px)").matches);

    $(ulToggle).click(function () {
        if (window.matchMedia("(max-width:768px)").matches) {
            $(this).next(UlList).toggle();
            $(this).find("i").toggleClass("rotate");
        }
    })

})

// let a = document.querySelectorAll(".ditail-head i");
//     a[0].style.transform = "rotate(180deg)";



