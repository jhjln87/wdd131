import { recipesList } from './recipes.js';

let container = document.querySelector('main');
let button = document.querySelector('#search-button');
let input = document.querySelector('#search-input');
let form = document.querySelector('#search-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    search();
});
input.addEventListener('keypress', handleEnter);
function handleEnter(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    search();
  }
}

function search() {
    let query = input.value;
    let filtered = recipesList.filter(function(recipe) {
        return (
            recipe.name.toLowerCase().includes(query.toLowerCase()) || recipe.description.toLowerCase().includes(query.toLowerCase()) || recipe.tags.find(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
    })
    let sorted = filtered.sort(compareRecipes);

    function compareRecipes(a,b) {
    if (a.rating < b.rating) {
        return 1;
    } else if (a.rating > b.rating) {
        return -1;
    }
    return 0;
    }
    
    container.innerHTML = "";
    sorted.forEach(function(recipe){
        render(recipe);
    })
}

function tags(tagsArray) {
    return tagsArray.map(tag => `<h4>${tag}</h4>`).join('');
}

function stars(rating) {
    let html = ``;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="star icon-star">★</span>`
      } else {
        html += `<span aria-hidden="true" class="star icon-star-empty">☆</span>`
      }			
    }
    return html
}

function template(recipe) {
    return `
    <section class="recipes-container">
            <img src="${recipe.image}" id="recipes-image" alt="A picture of ${recipe.name} by ${recipe.author}">
            <div>
                <div class=tags>${tags(recipe.tags)}</div>
                <h1 id="recipes-title">${recipe.name}</h1>
                <span
                id="recipes-rating"
                role="img"
                >
                ${stars(recipe.rating)}
                </span>
                <p id="recipes-description">${recipe.description}</p>
            </div>
        </section>
    `
}


function render(recipe) {
    let html = template(recipe);
    container.innerHTML += html
}

function init() {
    render(recipesList[Math.floor(Math.random()*recipesList.length)]);
}

init();