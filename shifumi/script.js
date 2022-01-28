let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let player_img = document.querySelector('#player_img');

paper.addEventListener('click', function() {
    player_img.src = "img/paper.png"
})

rock.addEventListener('click', function() {
    player_img.src = "img/rock.png"
})

scissor.addEventListener('click', function() {
    player_img.src = "img/scissor.png"
})