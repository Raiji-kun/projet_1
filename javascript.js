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


tabAlphabet.forEach( (x,indice) => {
    var div = document.createElement('div');
    div.setAttribute("id", `case${indice}`);
    div.textContent = x;
    block.appendChild(div);
});
// const mot = document.getElementById("mot");
// mot.innerHTML += rand; 

// Le joueur clique sur une lettre de l'alphabet / écrit une lettre de l'alphabet (encore une fois, libre à vous de décider ce que vous souhaitez proposer).
// La lettre est présente dans le mot proposé :
// Toutes les lettres "e" (par exemple si le joueur propose "e") sont affichées sur le mot secret et le joueur passe à la manche d'après.

// La lettre est introuvable dans le mot proposé :
// Le joueur perd un coup ;
// Le motif du pendu change ;
// Si le pendu est tué, le joueur perd.


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// let choixUtilisateur = prompt("Choisir une lettre")



// let verification = alphabet.indexOf(choixUtilisateur);


let boutonValider = document.getElementById('btn1');
let boutonAnnuler = document.getElementById('btn2');

let coup = 10;


let selectedLetter = null;
let selectedElement = null;

const nbrDiv = document.getElementById('alphabet').children.length;
for(let i = 0; i <nbrDiv;i++){
    const fenetre = document.getElementById('case'+i);
 
     fenetre.addEventListener('click',test );
    
     function test(){
        if(selectedElement != null){ 
            selectedElement.classList.remove('tamere');
        }
        const letter = fenetre.textContent;
        this.classList.add('tamere');
        selectedLetter = letter;
        selectedElement = this;

    }
}



boutonValider.onclick = (e) => {
    if(bla.indexOf(selectedLetter) >= 0 ){
        alert("ok");
    } else{
        coup--;
        // console.log(coup);
         let nombreDeCoup = document.getElementById('nombredecoup');
         nombreDeCoup.innerHTML = `Il vous reste  ${coup}  coups`;

    }
}

boutonAnnuler.onclick = () => {
        selectedElement.classList.remove('tamere');
    
}



// let nombreDeCoup = document.getElementById('nombredecoup')
// nombreDeCoup.innerHTML += `Il vous reste  ${coup}  coups`;

function verifChampInput(){
    let input = document.getElementById('input').value;
    if(input === ""){
        alert("Veuillez remplir le champ")
        return false;
    }else{
        return true;
    }
}





function verifMotInput() {
    let input = document.getElementById('input').value;
    if (input.match(/[^a-zA-Z]/g)) {
        alert('Rentrez des caractères valide');
    }
        if(input.toLocaleLowerCase() === rand.toLocaleLowerCase()){
            alert("Bien jouer; vous avez trouver le mot!");
        }else{
            alert("le mot entrer est incorect");
        }
    
    
}

let valueInput = document.getElementById('btnPrompt');

valueInput.onclick = () => {
    verifChampInput();
    verifMotInput();
}



