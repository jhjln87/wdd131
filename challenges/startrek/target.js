let firstp = document.getElementById("intro");
firstp.style.backgroundColor = "#f2c556";

let voyager = document.querySelector("em");
voyager.style.backgroundColor = "#acbfcc";
voyager.textContent = "USS Voyager Starship"

let bruh = document.createElement('img');
bruh.src = "https://live.staticflickr.com/1753/27901489567_327c3d6687_b.jpg";
bruh.alt = "uss enterprise"
firstp.after(bruh);
bruh.classList.add("rounded");