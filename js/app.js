 import questions from "./data.js";

function getInfo(questions){
    const letters = [];
    let titleGame = '';
    let infoGame = '';
    questions.forEach(item => {
        item.letter ? letters.push(item.letter) : undefined;
        item.title ? titleGame = item.title : undefined;
        item.content ? infoGame = item.content : undefined;
    })

    return [letters, titleGame, infoGame];
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
function titleComponent (title){
    const titleType = document.createElement('h2');
    titleType.classList.add('subtitle');
    titleType.innerHTML = title;
    return titleType;
}
function contentComponent (content){
    const contentInfo = document.createElement('p');
    contentInfo.classList.add('content');
    contentInfo.innerHTML = content;
    return contentInfo;
}
function buttonComponent (){

}
function showContent(titleType, contentInfo){
    titleComponent(titleType);
    contentComponent(contentInfo);
    const wrapper_controls = document.createElement('div');
    wrapper_controls.classList.add('wrapper-box');
    wrapper_controls.classList.add('pasapalabra-controls');

    wrapper_controls.appendChild( titleComponent(titleType));
    wrapper_controls.appendChild( contentComponent(contentInfo));

    return wrapper_controls;

}

function printGame(listingLetters, wrapper_controls){
    const printLetterGame = document.getElementById('app');
    const wrapper_col = document.createElement('div');
    wrapper_col.classList.add('wrapper-box');
    wrapper_col.classList.add('pasapalabra-letters');

    wrapper_col.appendChild(listingLetters);

    printLetterGame.appendChild(wrapper_col);
   printLetterGame.appendChild(wrapper_controls);

}

function play(){
    const [letters, titleGame, infoGame] = getInfo(questions);
    const listLetters = listingLetters(letters);
    const controls = showContent(titleGame, infoGame);
    printGame(listLetters, controls);
}

function initGame(){
  play();

}
window.onload = initGame;
