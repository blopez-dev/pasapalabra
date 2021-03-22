import questions from "./data.js";

function getLetters(questions){
    const letters = [];
    questions.forEach(item => { letters.push(item.letter)})
    return letters;
}
function listingLetters(alphabet){
    const listingLetters = document.createElement('ul');
    listingLetters.classList.add('wrapper-letters');
    alphabet.forEach(item => {
        let li = document.createElement('li');
        li.classList.add('letter')
        li.innerHTML += item;
        listingLetters.appendChild(li);
    })
    return listingLetters;
}
function printGame(listingLetters){
    const printLetterGame = document.getElementById('app');
    printLetterGame.appendChild(listingLetters);
}


function initGame(){
   const letters = getLetters(questions);
   const listLetters = listingLetters(letters);

   printGame(listLetters);


}
window.onload = initGame;
