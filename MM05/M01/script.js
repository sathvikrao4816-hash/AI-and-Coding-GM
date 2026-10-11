function ShowProfile(){
    let MyScore = 75, HighScore = 100, bonus = null, team;
    let IsTopScore = MyScore == HighScore;
    let rank;
    if (MyScore > 80){
        rank = "Gold";
    } else if (MyScore > 50){
        rank = "Silver";
    } 
    else{
        rank = "Bronze";
    }
    let hours = new Date().getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good Morning";

    } else if (hours < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    let stars = "", count = 0;
    while (count < 5) {
        stars = stars + "* ";
        count = count + 1;
    }

    document.getElementById("score").textContent = MyScore
    document.getElementById("record").textContent = HighScore
    document.getElementById("rank").textContent = rank
    document.getElementById("greeting").textContent = greeting
    document.getElementById("stars").textContent = stars
    document.getElementById("bonus").textContent = bonus
    document.getElementById("score").textContent = MyScore
    document.getElementById("team").textContent = team
}
