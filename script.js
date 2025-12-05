function rolld20() {
const d20button = document.getElementById('d20btn');
const results = document.getElementById('roll-result');
const die = Math.floor((Math.random()*20)+1);

 results.textContent = die + "(d20)";

}
