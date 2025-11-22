
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeScore.textContent = 0
guestScore.textContent = 0

let homeScoreCount = 0
let guestScoreCount = 0

function increaseHomeScore(num){
    homeScoreCount += num
    homeScore.textContent = homeScoreCount
}

function increaseGuestScore(num){
    guestScoreCount += num
    guestScore.textContent = guestScoreCount
}


function clearScores(){
    homeScore.textContent = 0
    guestScore.textContent = 0

    homeScoreCount = 0
    guestScoreCount = 0
}