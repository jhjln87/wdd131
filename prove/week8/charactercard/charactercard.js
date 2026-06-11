let snortleblat = {
    class: 'Swamp Beast Diplomat',
    level: 8,
    health: 100,
}

let attack = document.querySelector('#attack-btn');
let levelUp = document.querySelector('#level-btn');
document.querySelector("#char-class").innerHTML = snortleblat.class;
let health = document.querySelector('#char-health');
health.innerHTML = snortleblat.level;
let level = document.querySelector('#char-level');
level.innerHTML = snortleblat.health;

attack.addEventListener("click", () => {
    if (snortleblat.health <= 0) {
        alert("Character is dead");
    } else {
        snortleblat.health -= 20;
        level.innerHTML = snortleblat.health;
    }
});
levelUp.addEventListener("click", () => {
    if (snortleblat.health <= 0) {
        alert("Character is dead");
    } else {
        snortleblat.level++;
        health.innerHTML = snortleblat.level;
    }
});

