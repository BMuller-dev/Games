const book = document.querySelector(".book")
const book2 = document.querySelector(".fa-book")


book2.addEventListener("mouseover", function() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    book2.style.marginLeft = x + "px"
    book2.style.marginTop = y + "px"
    console.log("test")

})