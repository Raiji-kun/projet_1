const tabOfWord = ["Element", "Montagne", "Ordinateur", "Naruto", "elemente"];

const randomWord = tabOfWord[Math.floor(Math.random()*tabOfWord.length)];
const tabWord = randomWord.split('');
// get the first letter
const maj = tabWord.shift();

// firstLetter + "_" 
const underscore = "_".repeat(tabWord.length);
const result = maj + underscore;

// print on DOM
const mot = document.getElementById('mot');
mot.innerHTML += result;

// create many 26 div with the length of alphabetTab and print on the DOM
const alphabetTab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const block = document.getElementById('alphabet');

alphabetTab.forEach( (x,indice) => {
    var div = document.createElement('div');
    div.setAttribute("id", `case${indice}`);
    div.textContent = x;
    block.appendChild(div);
});

let coup = 8;
let selectedLetter = null;
let selectedElement = null;
const nbrDiv = document.getElementById('alphabet').children.length;

for(let i = 0; i <nbrDiv;i++){
    const fenetre = document.getElementById('case'+i);
     fenetre.addEventListener('click',selectCase );
    
     function selectCase(){
        if(selectedElement != null){ 
            selectedElement.classList.remove('colorSelect');
        }
        const letter = fenetre.textContent;
        this.classList.add('colorSelect');
        selectedLetter = letter;
        selectedElement = this;
        
    }
}


let boutonValider = document.getElementById('btn1');
boutonValider.addEventListener("click", valider);
let tab = result.split('');

function valider(){
    if(tabWord.indexOf(selectedLetter) >= 0 ){
        selectedElement.classList.add('bonneReponse');
   
        let filtrageLetter = tabWord.filter( x => x == selectedLetter);
        while(filtrageLetter.length != 0 ){
        let  ed = filtrageLetter.shift();
        let numb = tabWord.indexOf(selectedLetter);
         tab[numb+1] = ed;
         tabWord[numb]= ".";
        } 
         const replaceLetter = tab.join('');
         document.getElementById("mot").innerHTML = replaceLetter;
         console.log(replaceLetter)
         if(replaceLetter === randomWord){
            alert("Bien jouer; vous avez trouver le mot!");
            let recomencer = confirm('Voulez vous recommencer?');
            console.log(recomencer);
            if(recomencer == true){
                location.reload();
            }
        }

    }
    else{
        coup--;
         let nombreDeCoup = document.getElementById('nombredecoup');
         let image = document.createElement('img');
         let pendu = document.getElementById('pendu');
         let removePendu = document.getElementById('imagePendu');
         image.setAttribute("id", `imagePendu`);
         image.setAttribute("src", `image/Capture${coup}.PNG`);
         pendu.appendChild(image);
         nombreDeCoup.innerHTML = `Il vous reste  ${coup}  coups`;    
         selectedElement.classList.add('mauvaiseReponse');
        // listItem.replaceWith(da);
        // deleteElement();
        if(coup <= 0){
            alert('Vous avez perdu !')
            let recomencer = confirm('Voulez vous recomencer?');
            console.log(recomencer);
            if(recomencer == true){
                location.reload();
            }
        }
        removePendu.remove();
        
    }
}


let boutonAnnuler = document.getElementById('btn2');
boutonAnnuler.onclick = () => {
        selectedElement.classList.remove('colorSelect');
    
}

const resete = document.getElementById('btn3');
resete.addEventListener("click", reset);

function reset(){

 location.reload(false);
}
// const content = document.getElementById("alphabet").innerHTML;
// function updateDiv()
// { 
    
//     document.getElementById("alphabet").innerHTML = content;
// }

function verifChampInput(){
    let input = document.getElementById('input').value;
    if(input === ""){
        alert("Veuillez remplir le champ")
        return false;
    }else{
        return true;
    }
}

boutonAnnuler.onclick = () => {
        selectedElement.classList.remove('colorSelect');
}

function verifMotInput() {
    let input = document.getElementById('input').value;
    if (input.match(/[^a-zA-Z]/g)) {
        alert('Rentrez des caractères valide');
    }
        if(input.toLocaleLowerCase() === randomWord.toLocaleLowerCase()){
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
        return alert('Rentrez des caractères valide');
    }
        if(input.toLocaleLowerCase() === randomWord.toLocaleLowerCase()){
            alert("Bien jouer; vous avez trouver le mot!");
            let recomencer = confirm('Voulez vous recomencer?');
            console.log(recomencer);
            if(recomencer == true){
                location.reload();
            }
        }else{
            alert("le mot entrer est incorect");
            coup--;
            let image = document.createElement('img');
            let pendu = document.getElementById('pendu');
            let removePendu = document.getElementById('imagePendu');
            image.setAttribute("id", `imagePendu`);
            image.setAttribute("src", `image/Capture${coup}.PNG`);
            pendu.appendChild(image);
            if(coup <= 0){
                alert('Vous avez perdu !')
                let nombreDeCoup = document.getElementById('nombredecoup');
                nombreDeCoup.innerHTML = `Il vous reste  0  coups`;
                let recomencer = confirm('Voulez vous recomencer?');
                console.log(recomencer);
                if(recomencer == true){
                    location.reload();
                }
            }else{
                let nombreDeCoup = document.getElementById('nombredecoup');
                nombreDeCoup.innerHTML = `Il vous reste  ${coup}  coups`;

            }
            removePendu.remove();
        }
    
    
}





