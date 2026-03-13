// Nav toggle button

let link = document.querySelector(".nav-links");
let NavMenu = document.querySelector(".bi-list")
let li = document.querySelectorAll(".all-links li");
let Navclose = document.querySelector(".bi-x-circle");

// open menu
NavMenu.addEventListener("click", () => {
  link.classList.add("block");
  document.body.classList.add("no-scroll")
  li.forEach((list, ind) => {
    setTimeout(() => {
      list.classList.add("remove");
    }, ind * 200);
  });
})

// close menu
Navclose.addEventListener("click", function () {
  link.classList.remove("block")
  document.body.classList.remove("no-scroll")
  li.forEach((list, ind) => {
    list.classList.remove("remove");
  });

})

// list a tag click close menu 
li.forEach((el, ind) => {
  el.addEventListener("click", function () {
    link.classList.remove("block");
    document.body.classList.remove("no-scroll")
    li.forEach((list) => {
      list.classList.remove("remove");
    })
  })
})


