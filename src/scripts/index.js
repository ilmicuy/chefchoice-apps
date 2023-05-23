import "regenerator-runtime";
import "../styles/main.scss";
import "../styles/responsive.scss";
import restaurants from "../DATA.json";

let restoList = "";
let restoData = restaurants;
restoData.restaurants.forEach((restoData) => {
  restoList += `
<article class="post-item">
            <div class="post-item__card">
            <img class="post-item__thumbnail" src='${restoData.pictureId}' alt="${restoData.name}">
            <p class="post-item__location">🏠 ${restoData.city}</p>
            <p class="post-item__rating">⭐ ${restoData.rating}</p>
            </div>           
            <div class="post-item__content">
              <h1 class="post-item__title"><a href="#">${restoData.name}</a></h1>
              <p class="post-item__description">${restoData.description}</p>
            </div>
          </article>
  `;
  document.querySelector(".posts").innerHTML = restoList;
});

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
