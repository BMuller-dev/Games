let number = Math.floor(Math.random() * 1000) + 1;
let target = document.getElementById("target")

let numberTry = 0;
console.log(number)
document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();

    let user_input = document.getElementById("guessField").value;
    event.target.reset();
    numberTry++;
    target.classList.remove("error", "success")

    if (user_input < number) {
        target.classList.add("error")
        target.innerHTML = "More, " + numberTry + "/20"
    }
    if (user_input > number) {
        target.classList.add("error")
        target.innerHTML = "Less, " + numberTry + "/20"

    }
    if (user_input == number) {
        target.classList.add("success")
        target.innerHTML = "Nice one, number of try : " + numberTry + "/20"
    }
    if (numberTry >= 20 && user_input != number) {
        target.classList.add("error")
        target.innerHTML = "Big noob u loose, no more try, the number was : " + number
    }
    if (numberTry == 20 && user_input == number) {
        target.classList.add("success")
        target.innerHTML = "What a move ! Faker, last try" + numberTry + "/20"
    }

});