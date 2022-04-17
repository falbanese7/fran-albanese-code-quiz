// Declaring main variables needed
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

// questions variable that contains multiple objects each with the same property name but different values for each
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

// Add an event listenver to the start quiz button to start the timer and call the function to generate questions.
startQuiz.addEventListener("click", function () {
    if (timeControl === 0) {
        timeControl = setInterval(oneSecond, 1000);
    }
    generateQ(currentQIndex);
});

// I could have made this an anonymous function in the event listener above specifically when I call the setInterval funciton but I thought this was easier to understand for someone just getting started.
function oneSecond() {
    timeLeft--; // It will deduct one second from the timeLeft variable so it will act as a timer.
    gameTime.textContent = "Time remaining: " + timeLeft;

    if (timeLeft <= 0) { // If timeLeft is equal to or less than 0, then then we'll stop the timer and call the quizEnd function.
        clearInterval(timeControl);
        quizEnd(); 
    }
}

// Defining the function to clear the original start text and display a question from our variable of questions.
function generateQ(currentQIndex) {
    questionSect.innerHTML = "";
    newUl.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        let presentedQuestion = questions[currentQIndex].question;
        questionSect.textContent = presentedQuestion;
    }
    let presentedChoices = questions[currentQIndex].answers; // It will also append the answers which are actually list elements to the new unorderd list which will be appended to the questionSect variable.
    presentedChoices.forEach(function (newQ){
        let listEl = document.createElement("li");
        listEl.textContent = newQ;
        questionSect.appendChild(newUl)
        newUl.appendChild(listEl)
        listEl.addEventListener("click", (answerCheck));
    })
}

// This function will look for a click event, create a div HTML element, and depending on the answer, add text to the div.
function answerCheck(e) {
    let elem = e.target;
    let newDiv = document.createElement("div");

    if (elem.matches("li")) {
        newDiv.setAttribute("id", "newDiv");
        if (elem.textContent == questions[currentQIndex].trueAnswer) {
            score++;
            newDiv.textContent = "Correct! The answer was: " + questions[currentQIndex].trueAnswer;
        } else {
            timeLeft = timeLeft - deduct;
            newDiv.textContent = "Incorrect! The answer was: " + questions[currentQIndex].trueAnswer;
        }
    }

    currentQIndex++; // It will also check which question the user is on and if the user reaches the end of the questions, it will call the quizEnd function.

    if (currentQIndex >= questions.length) {
        quizEnd();
        newDiv.textContent = " You answered " + score + " out of " + questions.length + " questions correctly.";
    } else {
        generateQ(currentQIndex);
    }
    questionSect.appendChild(newDiv); // The new div will be appended to the overall questionSect variable which should appear right below it.
}

// Finally we define the quizEnd function.
function quizEnd() {
    questionSect.innerHTML = ""; // Clear the contents where our questions appear
    timeLeft.innerHTML = ""; // Clear the contents where our timer appears
    
    let allDoneHeader = document.createElement("h1"); // Create a variable so we can create a new h1 tag
    allDoneHeader.setAttribute("id", "allDoneHead"); // Giving an id of "allDoneHead" to the new h1 tag
    allDoneHeader.innerHTML = "That's it!"; // Text for the h1 tag
    questionSect.appendChild(allDoneHeader); 

    if (timeLeft >= 0) { // This if statement will display the user's score under the h1 tag
        let finalTime = timeLeft;
        let createNewText = document.createElement("p")
        createNewText.setAttribute("id", "score");
        clearInterval(timeControl);
        createNewText.textContent = "Your score is: " + finalTime;
        questionSect.appendChild(createNewText);
    }

    // Giving a label to our future input
    let newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter your initals: "
    questionSect.appendChild(newLabel);

    // Create the input field
    let userInput = document.createElement("input");
    userInput.setAttribute("id", "userInput");
    userInput.textContent = "";
    questionSect.appendChild(userInput);
    
    // Create the submit button
    let userSubmit = document.createElement("button");
    userSubmit.setAttribute("id", "userSubmit");
    userSubmit.setAttribute("type", "submit")
    userSubmit.textContent = "Submit";
    questionSect.appendChild(userSubmit);

    // This function is how we will save the user's input to local storage.
    userSubmit.addEventListener("click", function() {
       let playerName = userInput.value; // Defining a variable for the user's input so we can can use it later.
       let finalScore = { // This variable contains an object that will provide us with a way to store the remaining time and score.
            initals: playerName,
            time: timeLeft,
            correct: score
        }

       if (playerName === "") { // Always need to check to make sure the user inputs something!
           alert("Please enter your initals.");
           return false;
       } else {
            window.location.replace("./leaderboard.html"); // Finally the page will navigate to the highscore.html file
           ;
       } let scoreList = localStorage.getItem("scoreList"); // This will allow us to read the local storage item.
         if (scoreList === null) {
             scoreList = [];
         } else {
             scoreList = JSON.parse(scoreList);
         }
         scoreList.push(finalScore); // Add our final score variable to the end of the score list array.
         let cleanScore = JSON.stringify(scoreList); // New variable for when we convert our object to a string.
         localStorage.setItem("scoreList", cleanScore); // Save the new string to our local storage.
    })
}

