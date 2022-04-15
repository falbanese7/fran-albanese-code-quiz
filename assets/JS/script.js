const startQuiz = document.getElementById("start-quiz-btn");
const gameTime = document.getElementById("time-left");
const gameContainer = document.getElementById("container");
const questionSect = document.getElementById("questionsBox")
let score = 0;
let currentQIndex = 0;
let timeLeft = 100;
let timeControl = 0;
let deduct = 15;
let newUl = document.createElement("ul")

const questions = [
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        answers: ["Functions", "Strings", "Variables", "Arrays"],
        trueAnswer: "Arrays"
    },
    {
        question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
        answers: ["Conditional Loop", "While Loop", "For Loop", "Else Loop"],
        trueAnswer: "For Loop"
    },
    {
        question: "Where is the JavaScript placed inside an HTML document or page?", 
        answers: ["In the <footer> section", "In the <title> section", "In the <meta> section", "In the <body> and <head> sections"],
        trueAnswer: "In the <body> and <head> sections"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        trueAnswer: "All of the above"
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: ["Quotes", "Parantheses", "Square brackets","Curly braces"],
        trueAnswer: "Parantheses"
    },
    {
        question: "What is a section of code in JavaScript written to complete a task?",
        answers: ["Functions", "Strings", "Variables", "Arrays"],
        trueAnswer: "Functions"
    },
    {
        question:"What does the equation x != z mean?",
        answers: ["x is equal to z", "x is not equal to z", "The variable x is being assigned the string z", "Add z to x" ],
        trueAnswer: "x is not equal to z"
    }
    
]

startQuiz.addEventListener("click", function () {
    if (timeControl === 0) {
        timeControl = setInterval(() => {
            timeLeft--;
            gameTime.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timeControl);
                quizEnd();
                gameTime.textContent = "The quiz is over!"
            }
        }, 1000);
    }
    generateQ(currentQIndex);
});

function generateQ(currentQIndex) {
    questionSect.innerHTML = "";
    newUl.innerHTML = "";
    for (let i = 0; i < questionSect.length; i++) {
        let presentedQuestion = questions[currentQIndex].question;
        let presentedChoices = questions[currentQIndex].answers;
        questionSect.textContent = presentedQuestion;
    }
    presentedChoices.forEach(function (newQ){
        let listEl = document.createElement("li");
        listEl.textContent = newQ;
        questionSect.appendChild(newUl)
        newUl.appendChild(listEl)
        listEl.addEventListener("click", (answerCheck));
    })
}

function answerCheck(event) {
    let elem = event.target;

    if (elem.matches("li")) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");
        if (elem.textContent == questions[currentQIndex].trueAnswer) {
            score++;
            newDiv.textContent = "Correct!"
        } else {
            timeLeft = timeLeft - deduct;
            newDiv.textContent = "Incorrect! The answer was: " + questions[currentQIndex].trueAnswer;
        }
    }

    currentQIndex++;

    if (currentQIndex >= questions.length) {
        quizEnd();
        newDiv.textContent = "Time's up!" + "Your score was " + score + " out of " + questions.length + "!";
    } else {
        generateQ(currentQIndex);
    }
    questionSect.appendChild(newDiv);
}

