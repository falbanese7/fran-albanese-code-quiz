// // Connecting HTML elements to JS
// const startBtn = document.getElementById("start-btn");
// const titleEl = document.getElementById("title-section");
// const gameTime = document.getElementById("game-timer");
// const currentQ = document.getElementById("currentQ");
// const userChoices = document.getElementById("userChoices");
// const questionContainer = document.getElementById("question-container")

// // Time and score variables
// let timeLeft = 150;
// let userTime = 0;
// let deduct = 15; // To penalize user for wrong answer
// let score = 0;
// let newUl = document.createElement("ul");
// let currentQIndex = 0;
// let questionOrder;

// const questions = [
//     {
//         question: "In JavaScript, what element is used to store multiple values in a single variable?",
//         answers: ["Functions", "Strings", "Variables", "Arrays"],
//             // {text: "Functions", correct: false},
//             // {text: "Strings", correct: false},
//             // {text: "Variables", correct: false},
//             // {text: "Arrays", correct: true}
        
//         trueAnswer: "Arrays"
//     },
//     {
//         question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
//         answers: ["Conditional Loop", "While Loop", "For Loop", "Else Loop"],
//             // {text: "Conditional Loop", correct: false},
//             // {text: "While Loop", correct: false},
//             // {text: "For Loop", correct: true},
//             // {text: "Else Loop", correct: false}
        
//         trueAnswer: "For Loop"
//     },
//     {
//         question: "Where is the JavaScript placed inside an HTML document or page?", 
//         answers: ["In the <footer> section", "In the <title> section", "In the <meta> section", "In the <body> and <head> sections"],
//             // {text: "In the <footer> section", correct: false},
//             // {text: "In the <title> section", correct: false},
//             // {text: "In the <meta> section", correct: false},
//             // {text: "In the <body> and <head> sections", correct: true}
        
//         trueAnswer: "In the <body> and <head> sections"
//     },
//     {
//         question: "Arrays in JavaScript can be used to store _____.",
//         answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
//         //     {text: "Numbers and strings", correct: false},
//         //     {text: "Other arrays", correct: false},
//         //     {text: "Booleans", correct: false},
//         //     {text: "All of the above", correct: true}
//         trueAnswer: "All of the above"
//     },
//     {
//         question: "The condition in an if / else statement is enclosed within _____.",
//         answers: ["Quotes", "Parantheses", "Square brackets","Curly braces"],
//             // {text: "Quotes", correct: false},
//             // {text: "Parantheses", correct: true},
//             // {text: "Square brackets", correct: false},
//             // {text: "Curly braces", correct: false}
        
//         trueAnswer: "Parantheses"
//     },
//     {
//         question: "What is a section of code in JavaScript written to complete a task?",
//         answers: ["Functions", "Strings", "Variables", "Arrays"],
//             // {text: "Functions", correct: true},
//             // {text: "Strings", correct: false},
//             // {text: "Variables", correct: false},
//             // {text: "Arrays", correct: false}
        
//         trueAnswer: "Functions"
//     },
//     {
//         question:"What does the equation x != z mean?",
//         answers: ["x is equal to z", "x is not equal to z", "The variable x is being assigned the string z", "Add z to x" ],
//             // {text: "x is equal to z", correct: false},
//             // {text: "x is not equal to z", correct: true},
//             // {text: "The variable x is being assigned the string z", correct: false},
//             // {text: "Add z to x", correct: false}
//         trueAnswer: "x is not equal to z"
//     }
    
// ]


// startBtn.addEventListener("click", startQuiz);

// function startQuiz() {
//     titleEl.classList.add("hide")
//     currentQ.classList.remove("hide")
//     userChoices.classList.remove("hide")
//     questionOrder = questions.sort(() => Math.random() -.5)
//     currentQIndex = 0
//     if (userTime === 0) {
//         userTime = setInterval(function () {
//             timeLeft--;
//             gameTime.textContent = "Time: " + timeLeft;
            
//             if (timeLeft <= 0) {
//                 clearInterval(userTime);
//                 quizEnd();
//                 gameTime.textContent = "Time's up!";
//             }
//         },1000);
//     }
//     showQuestion(currentQIndex);
// }

// function showQuestion(currentQIndex) {
//     currentQ.innerHTML = "";
//     userChoices.innerHTML = "";
//     for (let = 0; i < questions.length; i++) {

//     }
//     // questions.answers.forEach(answer => {
//     //     const button = document.createElement("button")
//     //     button.innerText = answer.text
//     //     button.classList.add('btn-purple-custom')
//     //     if (answer.correct) {
//     //         button.dataset.correct = answer.correct
//     //     }
//     //     button.addEventListener('click', selectChoice)
//     //     userChoices.appendChild(button)
//     // })
// }

// function selectChoice(e) {
//     const userSelection = e.target
//     const correct = userSelection.dataset.correct
//     let newDiv = document.createElement("div");
//     newDiv.setAttribute("id", "newDiv");
//     if (correct) {
//         console.log("correct");
//         window.alert("Correct!");
//         currentQIndex++;
//     } else {
//         console.log("wrong");
//         window.alert("Wrong! The answer was " + questions[currentQIndex].trueAnswer);
//         timeLeft = timeLeft - deduct;
//         currentQIndex++;
//     }  
//     resetQuestion();
//     showQuestion(questionOrder[currentQIndex])

//     currentQIndex++;

//     if (currentQIndex >= questions.length) {
//         quizEnd();
//         newDiv.textContent = "End of quiz!" + "" + "You got " + score + "/" + questions.length + "correct!"
//     } else {
//         resetQuestion();
//         showQuestion(questionOrder[currentQIndex])
//     }
//     questionContainer.appendChild(newDiv);
// }

