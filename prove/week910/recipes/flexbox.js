import { recipesList } from './recipes.js';

let recipesImage = document.getElementById("recipes-image");
let recipesType = document.getElementById("recipes-type");
let recipesTitle = document.getElementById("recipes-title");
let recipesDescription = document.getElementById("recipes-description");

recipesImage.src = "images/apple-crisp.webp";
recipesImage.alt = "Apple crisp pie";
recipesType.innerHTML = `dessert`;
recipesTitle.innerHTML = `Apple Crisp`;
recipesDescription.innerHTML = `This apple crisp recipe is a simple yet delicious fall desert that's great served with warm vanilla ice cream.`;

let stars = 4;
let starElements = document.querySelectorAll(".star");

let recipesRating = document.getElementById("recipes-rating");
recipesRating.ariaLabel = `Rating: ${stars} out of 5 stars`;

for (let i = 0; i < starElements.length; i++) {
    if (stars > i) {
        starElements[i].innerHTML = "★";
        starElements[i].classList.add("icon-star");
    } else {
        starElements[i].innerHTML = "☆";
        starElements[i].classList.add("icon-star-empty");
    }
}