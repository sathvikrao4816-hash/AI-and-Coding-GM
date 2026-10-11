var songs = ["Zoom", "Bounce", "Glow", "Rush", "Spark"]
var num = [320, 61, 119, 261, 314]
function SortSongs(){
    songs.sort();
    document.getElementById("sortResult").innerHTML = songs.join(", ") ;
}

function RevSongs() {
    songs.reverse();
    document.getElementById("revResult").innerHTML = songs.join(", ");
}

function SortNumAsc() {
    num.sort(function(a, b) {
        return a - b;
    })
     document.getElementById("numResult").innerHTML = num.join(", ");
}

function SortNumDsc() {
    num.sort(function (a, b) {
        return b - a;
    })
    document.getElementById("numResult").innerHTML = num.join(", ");
}
