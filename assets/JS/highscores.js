const leaderBoard = document.getElementById("leaderboard");
const resetBtn = document.getElementById("reset-score");

let scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse(scoreList);

if (scoreList !== null) {
    for (let i = 0; i < scoreList.length; i++) {
        let createScore = document.createElement("li")
        createScore.setAttribute("class", "list-group-item")
        createScore.innerHTML ="Initials: " + scoreList[i].initals + " Final Time: " + scoreList[i].time + " Correct answers: " + scoreList[i].correct;
        leaderBoard.appendChild(createScore);
    }
}

resetBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})
