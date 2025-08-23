// tpyed javascript code

var typed = new Typed('#typed', {
  strings: ['Imran Alvi', 'front-end developer'],
  typeSpeed: 150,
  backspeed: 150,
  loop: true
});




// Nav toggle button

let link = document.querySelector(".nav-links");
let toggle = document.querySelector(".bi")
let a = document.querySelectorAll(".all-links a");

toggle.addEventListener("click", function () {
  if (link.style.display === "none") {
    link.style.display = "block"
  }
  else {
    link.style.display = "none"
  }
})

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    if (link.style.display === "block") {
      link.style.display = "none"
    }
  })
}

const imgMove = document.getElementById("img-move");
const hello = document.querySelector(".hero-content")
window.onload = function () {
  imgMove.style.transform = "scale(1,1)";
  hello.style.transform = "translateY(0)";
}


// window.addEventListener("scroll", function () {
//   let pro_box = document.querySelectorAll(".pro-box");

//   const scrolly = window.scrollY;

//   // project box animation
//   if (scrolly >= 1190) {
//     pro_box.forEach((pro, ind) => {
//       setTimeout(() => {
//         pro.style.transform = "translateY(0)";
//         pro.style.opacity = "1";

//       }, ind * 200);
//     })
//   }
//   else {
//     pro_box.forEach((box) => {
//       box.style.transform = "translateY(100px)";
//       box.style.opacity = "0";
//     });
//   }
// })



function scrollanimation(entries) {
  entries.forEach(entry => {

    // project animtion 
    if (entry.target.classList.contains("pro-cover")) {

      let proBox = document.querySelectorAll(".pro-box");

      if (entry.isIntersecting) {
        proBox.forEach((v, i) => {
          setTimeout(() => {
            v.style.transform = "translateY(0)";
            v.style.opacity = "1";
          }, i * 200);
        });
      }
      // else {
      //   proBox.forEach(k => {
      //     k.style.transform = "translateY(100px)";
      //     k.style.opacity = "0";
      //   });
      // }
    }

    // normal animation
    else {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // else {
      //   entry.target.classList.remove("show");
      // }
    }
  });
}

let observe = new IntersectionObserver(scrollanimation);

let animation = document.querySelectorAll(".image-about, .aboutbox2, .skill-cover, .pro-box");
animation.forEach(el => {
  observe.observe(el);
})




