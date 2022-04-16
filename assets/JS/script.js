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
        answers: ["1. Functions", "2. Strings", "3. Variables", "4. Arrays"],
        trueAnswer: "4. Arrays"
    },
    {
        question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
        answers: ["1. Conditional Loop", "2. While Loop", "3. For Loop", "4. Else Loop"],
        trueAnswer: "3. For Loop"
    },
    {
        question: "Where is the JavaScript placed inside an HTML document or page?", 
        answers: ["1. In the <body> and <head> sections", "2. In the <title> section", "3. In the <meta> section", "4. In the <footer> section"],
        trueAnswer: "1. In the <body> and <head> sections"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["1. Numbers and strings", "2 .Other arrays", "3. Booleans", "4. All of the above"],
        trueAnswer: "4. All of the above"
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: ["1. Quotes", "2. Parantheses", "3. Square brackets","4. Curly braces"],
        trueAnswer: "2. Parantheses"
    },
    {
        question: "What is a section of code in JavaScript written to complete a task?",
        answers: ["1. Functions", "2. Strings", "3. Variables", "4. Arrays"],
        trueAnswer: "1. Functions"
    },
    {
        question:"Which of the following describles the equation x != z?",
        answers: ["1. x is equal to z", "2. x is not equal to z", "3. Variable x is being assigned z", "4. Add z to x" ],
        trueAnswer: "2. x is not equal to z"
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
            }
        }, 1000);
    }
    generateQ(currentQIndex);
});

function generateQ(currentQIndex) {
    questionSect.innerHTML = "";
    newUl.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        let presentedQuestion = questions[currentQIndex].question;
        questionSect.textContent = presentedQuestion;
    }
    let presentedChoices = questions[currentQIndex].answers;
    presentedChoices.forEach(function (newQ){
        let listEl = document.createElement("li");
        listEl.textContent = newQ;
        questionSect.appendChild(newUl)
        newUl.appendChild(listEl)
        listEl.addEventListener("click", (answerCheck));
    })
}

function answerCheck(e) {
    let elem = e.target;
    let newDiv = document.createElement("div");

    if (elem.matches("li")) {
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
        newDiv.textContent = " You answered " + score + " out of " + questions.length + " questions correctly.";
    } else {
        generateQ(currentQIndex);
    }
    questionSect.appendChild(newDiv);
}

function quizEnd() {
    questionSect.innerHTML = "";
    timeLeft.innerHTML = "";
    
    let allDoneHeader = document.createElement("h1");
    allDoneHeader.setAttribute("id", "allDoneHead");
    allDoneHeader.innerHTML = "That's it!";
    questionSect.appendChild(allDoneHeader);

    if (timeLeft >= 0) {
        let finalTime = timeLeft;
        let createNewText = document.createElement("p")
        createNewText.setAttribute("id", "score");
        clearInterval(timeControl);
        createNewText.textContent = "Your score is: " + finalTime;
        questionSect.appendChild(createNewText);
    }

    let newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter your initals: "
    questionSect.appendChild(newLabel);

    let userInput = document.createElement("input");
    userInput.setAttribute("id", "userInput");
    userInput.textContent = "";
    questionSect.appendChild(userInput);
    
    let userSubmit = document.createElement("button");
    userSubmit.setAttribute("id", "userSubmit");
    userSubmit.setAttribute("type", "submit")
    userSubmit.textContent = "Submit";
    questionSect.appendChild(userSubmit);


    userSubmit.addEventListener("click", function() {
       let playerName = userInput.value;
       let finalScore = {
            initals: playerName,
            time: timeLeft,
            correct: score
        }

       if (userInput === null) {
           window.alert("Please enter your initals.")
       } else {
           finalScore;
       } let scoreList = localStorage.getItem("scoreList");
         if (scoreList === null) {
             scoreList = [];
         } else {
             scoreList = JSON.parse(scoreList);
         }
         scoreList.push(finalScore);
         let cleanScore = JSON.stringify(scoreList);
         localStorage.setItem("scoreList", cleanScore);
         window.location.replace("./highscores.html");
    })
}

