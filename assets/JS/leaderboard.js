// Declaring variables for these html elements.
const leaderBoard = document.getElementById("leaderboard");
const resetBtn = document.getElementById("reset-score");

// Reading the local storage string
let scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse(scoreList);

if (scoreList !== null) {
    // For loop will create a new list element for each new submission
    for (let i = 0; i < scoreList.length; i++) {
        let createScore = document.createElement("li")
        createScore.setAttribute("class", "list-group-item")
        createScore.innerHTML ="Initials: " + scoreList[i].initals + " Final Time: " + scoreList[i].time + " Correct answers: " + scoreList[i].correct;
        leaderBoard.appendChild(createScore);
    }
}

// Clear the local storage and refresh the page to present an empty leaderboard with no scores.
resetBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})
