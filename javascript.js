const word = ["Element", "Montagne", "Ordinateur", "Naruto"];

const rand = word[Math.floor(Math.random()*word.length)];
console.log(rand);
const bla = rand.split('');
const maj = bla.shift();
const underscore = "_".repeat(bla.length);

const resultat = maj + underscore;

const mot = document.getElementById('mot');
mot.innerHTML += resultat; 

const tabAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const block = document.getElementById('alphabet');


tabAlphabet.forEach( x => {
    var div = document.createElement('div');
    div.setAttribute("id", "case");
    div.textContent = x;
    block.appendChild(div);
});
