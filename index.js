// Nav toggle button

let link = document.querySelector(".nav-links");
let toggle = document.querySelector(".bi-list")
let li = document.querySelectorAll(".all-links li");


toggle.addEventListener("click",()=>{
  

    if (!link.classList.contains("block")) {
    // Menu open
    link.classList.add("block");

    li.forEach((list, ind) => {
      setTimeout(() => {
        list.classList.add("remove");
      }, ind * 200);
    });

  } else {
    // Menu close (reverse animation)
    li.forEach((list, ind) => {
      setTimeout(() => {
        list.classList.remove("remove");
      }, ind * 200);
    });

    setTimeout(() => {
      link.classList.remove("block");
    }, li.length * 200);
  }

})


