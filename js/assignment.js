"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables

let shiftValue;
let popValue;


// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.innerText = todos;
}

function updateAnswerTwo() {
   answerTwoEl.innerText = todos[2];
}

function removeLastValue() {
    popValue = todos.pop();    
}

function removeFirstValue() {
   shiftValue = todos.shift();
}

function addShiftAndPopValues() {
 todos.push(shiftValue, popValue);
}

function updateAnswerFour() {
    answerFourEl.innerText = todos;
}

function reverseTodoList() {
  todos.reverse();
}

function updateAnswerFive() {
answerFiveEl.innerText = todos;
}

function updateAnswerSix() {
answerSixEl.innerText = todos;
}

function render() {

}

submissionBtn.addEventListener("click", function () {
    // Update this function
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    updateAnswerFour();
    reverseTodoList();
    updateAnswerFive();
    removeFirstValue(); 
    addShiftAndPopValues();
    updateAnswerSix();


    render();
});
