class Planet {
    static shape = "circular"
    constructor(name, fact){
        this.name = name;
        this.fact = fact;
    } 
}
var Mercury = new Planet("Mercury", "the closest planet to the Sun");
var Venus = new Planet("Venus", "the hottest planet in the solar system");
var Earth = new Planet("Earth", "The only habitable planet in the solar system");
document.getElementById("show").textContent = Earth.fact;
document.getElementById("show").textContent = Venus.name + " is " +Venus.fact