var fairs = ["Nike", "Adidas", "Puma", "Sketchers"];
document.getElementById("show").innerHTML = fairs[2];
document.getElementById("before").innerHTML = fairs;
fairs.pop();
document.getElementById("after").innerHTML = fairs;
fairs.push("Crocs");
document.getElementById("push").innerHTML = fairs;
var found = false;
for (var i = 0; i < fairs.length; i++) {
    if(fairs[i] == "Crocs"){
        found = true;
        break;
    }
}
    if(found){
        document.getElementById("found").innerHTML = "Found Crocs";
    }