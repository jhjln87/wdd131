/* proviced practice code */
// let selectElem = document.getElementById('webdevlist');
// selectElem.addEventListener('change', function(){
//     let codeValue = selectElem.value;
//     console.log(codeValue);
// })

/* play time */
// let title = document.querySelector("h1");
// let select = document.getElementById("webdevlist")

// select.addEventListener("change", function(){
//     title.textContent = `You have selected ${select.value}.`;
// });

/* intro */
let title = document.querySelector('h1');
console.log (title);
title.textContent = 'Web Page Components';
const topics = document.querySelector('#topics');
topics.style.color = "white";
const wrapper = document.getElementById('content');
wrapper.style.backgroundColor = "black";
let list = document.querySelector(".list");
list.style.border = "3px solid black";
let para = document.querySelector('p');
para.style.fontSize = '2em';
const image = document.querySelector('img');
image.setAttribute('src', 'darkmode.jpg');