let player_img = document.querySelector("#player_img");
let bot_img = document.querySelector("#bot_img");
let state = document.querySelector('.state');

let restart = document.querySelector('.restart');

restart.addEventListener('click', function() {
    bot_img.src = "";
    player_img.src = "";
    restart.style.visibility = "hidden";
    state.textContent = "";
    button.style.visibility = "visible";
})

let player_choice;

let rock = document.querySelector(".rock");
rock.addEventListener("click", function() {
    player_img.src = "img/rock.png";
    player_choice = 1;
});

let paper = document.querySelector(".paper");
paper.addEventListener("click", function() {
    player_img.src = "img/paper.png";
    player_choice = 2;
});

let scissor = document.querySelector(".scissor");
scissor.addEventListener("click", function() {
    player_img.src = "img/scissor.png";
    player_choice = 3;
});

let player_points = 0;
let bot_points = 0;

let button = document.querySelector(".button");
button.addEventListener("click", function() {
    button.style.visibility = "hidden";

    let bot_choice = Math.floor(Math.random() * (4 - 1) + 1);

    if (bot_choice == 1) {
        bot_img.src = "img/rock.png";
    }
    if (bot_choice == 2) {
        bot_img.src = "img/paper.png";
    }
    if (bot_choice == 3) {
        bot_img.src = "img/scissor.png";
    }

    restart.style.visibility = "visible";
    if (player_choice - bot_choice % 3 == 1) {
        state.textContent = "Victory";
        player_points++
    } else if (player_choice == bot_choice) {
        state.textContent = "Draw";
    } else {
        state.textContent = "Defeat";
        bot_points++
    }
    points();
});

let player_point = document.querySelector('.player');
let bot_point = document.querySelector('.bot');

function points() {
    player_point.textContent = "Player 1 has " + player_points + " points.";
    bot_point.textContent = "AI has " + bot_points + " points."

}