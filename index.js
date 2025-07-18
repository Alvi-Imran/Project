// tpyed javascript code
{
  var typed = new Typed('#typed', {
    strings: ['IMRAN ALVI', 'WEB DESINER'],
    typeSpeed: 150,
    backspeed:150,
    loop:true
  });
}


// about and skill javascript
{
    let skills = document.querySelector(".skill");
    let about = document.querySelector(".about-contant");
    let aboutImg = document.getElementById("about-img");

   
      function skill(){
        if(skills.style.display="none"){
        skills.style.display="block"
        about.style.display="none"
        aboutImg.src="images/skill-portrait.jpg"
      }
    }
    
      function aboutme(){ 
        if(about.style.display="none")
        about.style.display="block";
        skills.style.display="none";
        aboutImg.src="images/coding-boy.jpg"
      }
    
}

// Nav toggle button
{
  let link = document.querySelector(".nav-links");
  let toggle = document.querySelector(".bi")
  let a = document.querySelectorAll(".all-links a");
  
  toggle.addEventListener("click",function(){
    if(link.style.display==="none"){
      link.style.display="block"
    }
    else{
      link.style.display="none"
    }
    })

    for(let i = 0; i < a.length; i++){
      a[i].addEventListener("click",function(){
        if(link.style.display==="block"){
          link.style.display="none"
        }
        })
    }


}


