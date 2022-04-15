// Connecting HTML elements to JS
const startBtn = document.getElementById("start-btn");
const titleEl = document.getElementById("title-section");
const gameTime = document.getElementById("game-timer");
const currentQ = document.getElementById("currentQ");
const userChoices = document.getElementById("userChoices");

// Time and score variables
let timeLeft = 50;
let userTime = 0;
let deduct = 15; // To penalize user for wrong answer
let score = 0;

let questionOrder, currentQIndex


startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    titleEl.classList.add("hide")
    currentQ.classList.remove("hide")
    userChoices.classList.remove("hide")
    questionOrder = questions.sort(() => Math.random() -.5)
    currentQIndex = 0
    if (userTime === 0) {
        userTime = setInterval(function () {
            timeLeft--;
            gameTime.textContent = "Time: " + timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(userTime);
                quizEnd();
                gameTime.textContent = "Time's up!";
            }
        },1000);
    }
    revealQuestion();
}

function revealQuestion() {
    resetQuestion()
    showQuestion(questionOrder[currentQIndex])
}

function showQuestion(questions) {
    currentQ.innerText = questions.question
    questions.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn-purple-custom')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectChoice)
        userChoices.appendChild(button)
    })
}

function resetQuestion() {
    while (userChoices.firstChild) {
        userChoices.removeChild
        (userChoices.firstChild)
    }
}

function selectChoice(e) {
    const userSelection = e.target
    const correct = userSelection.dataset.correct
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "newDiv");
    if (correct) {
        userChoices.appendChild(newDiv)
        newDiv.textContent = "Correct!"
    } else {
        userChoices.appendChild(newDiv)
        newDiv.textContent = "Wrong!"
        userTime = userTime - deduct;
    }
}

const questions = [
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        answers: [
            {text: "Functions", correct: false},
            {text: "Strings", correct: false},
            {text: "Variables", correct: false},
            {text: "Arrays", correct: true}
        ]
    },
    {
        question:"What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
        answers: [
            {text: "Conditional Loop", correct: false},
            {text: "While Loop", correct: false},
            {text: "For Loop", correct: true},
            {text: "Else Loop", correct: false}
        ]
    },
    {
        question:"Where is the JavaScript placed inside an HTML document or page?", 
        answers: [
            {text: "In the <footer> section", correct: false},
            {text: "In the <title> section", correct: false},
            {text: "In the <meta> section", correct: false},
            {text: "In the <body> and <head> sections", correct: true}
        ]
    },
    {
        question:"Arrays in JavaScript can be used to store _____.",
        answers: [ 
            {text: "Numbers and strings", correct: false},
            {text: "Other arrays", correct: false},
            {text: "Booleans", correct: false},
            {text: "All of the above", correct: true}
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: [ 
            {text: "Quotes", correct: false},
            {text: "Parantheses", correct: true},
            {text: "Square brackets", correct: false},
            {text: "Curly braces", correct: false}
        ]
    },
    {
        question: "What is a section of code in JavaScript written to complete a task?",
        answers: [ 
            {text: "Functions", correct: true},
            {text: "Strings", correct: false},
            {text: "Variables", correct: false},
            {text: "Arrays", correct: false}
        ]
    },
    {
        question:"What does the equation x != z mean?",
        answers: [
            {text: "x is equal to z", correct: false},
            {text: "x is not equal to z", correct: true},
            {text: "The variable x is being assigned the string z", correct: false},
            {text: "Add z to x", correct: false}
        ]
    }
    
]
