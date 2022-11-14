const word = ["Element", "Montagne", "Ordinateur", "Naruto"];

const rand = word[Math.floor(Math.random()*word.length)];
console.log(rand);
const bla = rand.split('');
const maj = bla.shift();
const underscore = "_".repeat(bla.length);

console.log(maj + underscore);



// const mot = document.getElementById("mot");
// mot.innerHTML += rand; 

