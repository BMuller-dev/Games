import { list_movies } from "./movie.js";

const final_questions = [
  {
    id: 1,
    question: "Is your movie popular ?",
    answers: ["Yes", "No", "Don't know"],
  },
  {
    id: 2,
    question: "Who is the main actor ?",
    answers: ["Yes", "No", "Don't know"],
  },
  {
    id: 3,
    question: "Is your movie from after the 2000s ?",
    answers: ["Yes", "No", "Don't know"],
  },
  {
    id: 4,
    question: "Is the genre of your movie one of these proposals?",
    answers: ["Yes", "No", "Don't know"],
  },
  {
    id: 5,
    question: "Is the director one of these proposals?",
    answers: ["Yes", "No", "Don't know"],
  },
  {
    id: 6,
    question: "Is the main actor one of these proposals?",
    answers: ["Yes", "No", "Don't know"],
  },
];

// Séléction des boutons
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let dont_know = document.getElementById('dont_know');

// Mélangeur de question
let shuffle = final_questions.sort(() => Math.random() - 0.5);
console.log(shuffle);

yes.addEventListener('click', function() {
  console.log('test')
})

// test



shuffle.forEach((element) => {});

final_questions;
