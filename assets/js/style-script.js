//homeContent-buttons
 
let btnWeb = document.querySelector(".btnWeb");
let btnGraph = document.querySelector(".btnGraph");

btnGraph.addEventListener("mouseover", function(){
  btnWeb.classList.replace("btnWeb","btnGraph");
  btnGraph.classList.replace("btnGraph","btnWeb");
  btnGraph.addEventListener("mouseout", function(){
    btnGraph.classList.replace("btnWeb","btnGraph");
    btnWeb.classList.replace("btnGraph","btnWeb");
  });
});

//active-navbar

let header = document.querySelector(".header");
let navLink = document.querySelectorAll(".navLink");
let linkBar = document.querySelectorAll(".navLink__bar");

for(let keyOne = 0; keyOne < navLink.length; keyOne ++){
  navLink[keyOne].addEventListener("click", function(){
    for(let keyTwo = 0; keyTwo < navLink.length; keyTwo ++){
      if(keyOne < keyTwo){
        navLink[keyTwo].classList.remove("active");
        linkBar[keyTwo - 1].style.visibility = "hidden";
      }
      else{
        for(let keyThree = 0; keyThree < keyOne; keyThree ++){
          linkBar[keyThree].style.visibility = "visible";
        }
        navLink[keyTwo].classList.add("active");
      }
    }
  })
}

//profile-content-scroll

let profile = document.querySelector(".profile-contents");
profile.addEventListener("scroll", function(){

})

//window-scroll

/*

window.addEventListener("scroll", function(){
  let scrollPosition = window.scrollY;
  if(scrollPosition > 250){
    navLink[0].classList.add("active");    
    if(scrollPosition > 300){
      linkBar[0].style.visibility = "visible";
      if(scrollPosition > 350){
        navLink[1].classList.add("active");
      }
      else{
        navLink[1].classList.remove("active");
      }
    }
    else{
      linkBar[0].style.visibility = "hidden";
    }
  }
  else{
    navLink[0].classList.remove("active");
  }
})

*/