//homeContent-buttons

function homeContentButtons(){
  let btnWeb = document.querySelector(".homeContent-buttons__btnWeb");
  let btnGraph = document.querySelector(".homeContent-buttons__btnGraph");
  btnGraph.addEventListener("mouseover", function(){
    btnGraph.style.backgroundColor = "rgb(225, 0, 81)";
    btnWeb.style.backgroundColor = "rgba(225, 0, 81,0.5)";  
    btnGraph.addEventListener("mouseout", function(){
      btnWeb.style.backgroundColor = "rgb(225, 0, 81)";
      btnGraph.style.backgroundColor = "rgba(225, 0, 81,0.5)";
    });
  });
} homeContentButtons();

//window-scroll

let header = document.querySelector(".header");
let navLink = document.querySelectorAll(".navLink");

for(let i=0; i < navLink.length; i++){
  navLink[i].addEventListener("click", function(){
    navLink[i].classList.add("active");
  });
}