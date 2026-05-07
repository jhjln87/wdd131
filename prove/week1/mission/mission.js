/*
Steps needed:
setup js page and add script call in html
add selector box in html
find new colors and image
add any needed selector IDs
write up the code
debug 
*/
let displayMode = document.querySelector("select");
let logo = document.querySelector('img');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let hr = document.querySelector('hr');
let p = document.querySelector('p');
let p2 = document.getElementById("italic");
let ol = document.querySelector("ol");

displayMode.addEventListener('change', changeMode);

function changeMode() {
    let current = displayMode.value;
    if (current == 'dark') {
        logo.setAttribute("src", "byui-logo-white.png");
        logo.setAttribute("alt", "Brigham Young University-Idaho logo, in black and white");
        logo.style.width = "21.5%";
        document.body.style.backgroundColor = "#303234";
        displayMode.style.backgroundColor = "#303234"
        h1.style.color = "white";
        h2.style.color = "#6f99b5";
        hr.style.color = "white";
        p.style.color = "white";
        italic.style.color = "white";
        ol.style.color = "white";
    } else {
        logo.setAttribute("src", "byui-logo-blue.webp");
        logo.setAttribute("alt", "Brigham Young University-Idaho logo, in blue");
        logo.style.width = "25%";
        document.body.style.backgroundColor = "unset";
        displayMode.style.backgroundColor = "unset"
        h1.style.color = "unset";
        h2.style.color = "#006EB6";
        hr.style.color = "unset";
        p.style.color = "unset";
        italic.style.color = "unset";
        ol.style.color = "unset";
    }
}           