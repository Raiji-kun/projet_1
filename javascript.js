const word = ["Element", "Montagne", "Ordinateur", "Naruto"];

const rand = word[Math.floor(Math.random()*word.length)];
console.log(rand);
const bla = rand.split('');
const maj = bla.shift();
bla.forEach( x => x.replace(x, "_"));


// const mot = document.getElementById("mot");
// mot.innerHTML += rand; 

