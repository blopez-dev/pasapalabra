 import questions from "./data.js";

function getInfo(questions){
    const collectionQuestions = [];
    const letters = [];
    let titleGame = '';
    let infoGame = '';
    questions.forEach(item => {
        item.letter ? letters.push(item.letter) : undefined;
        item.title ? titleGame = item.title : undefined;
        item.content ? infoGame = item.content : undefined;
        item.questions ? collectionQuestions.push({status: item.status, questions: item.questions,}) : undefined;
    })

    return [letters, titleGame, infoGame, collectionQuestions];
}
 function tryQuestion() {
     let index;
     return index = Math.floor(Math.random() * (0 - 3) + 3);
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
function buttonComponent(text, onClick, styleBtn){
    const element = document.createElement('button');
    element.addEventListener('click', onClick);
    element.classList.add('btn', styleBtn);
    element.innerText = text;
    return element;
}
function wrapperContent (content, elementClass){
     const renderContent = document.createElement('div');
     renderContent.classList.add('wrapper-content');
     renderContent.classList.add(elementClass);
     renderContent.appendChild(content);
     return renderContent;
 }

function inputWord (){
   const inputBox = document.createElement('input');
   inputBox.setAttribute('type', 'text');
   inputBox.setAttribute('placeholder', 'Introduce tu respuesta');
   return inputBox;
}
const onPlay = () => {
    document.querySelector('.pasapalabra-controls').remove();

 }

const onSend = () => {}
const onPassToWord = () => {}

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
function initPlay(titleType, contentInfo){
    titleComponent(titleType);
    contentComponent(contentInfo);
    const btnPlay = buttonComponent('Jugar', onPlay, 'primary');
    const wrapper_controls = document.createElement('div');
    wrapper_controls.classList.add('pasapalabra-controls');

    wrapper_controls.appendChild( titleComponent(titleType));
    wrapper_controls.appendChild( contentComponent(contentInfo));
    wrapper_controls.appendChild( btnPlay);
    return wrapper_controls;
}
function printGame(listingLetters, renderContent){
    const printLetterGame = document.getElementById('app');

    const donutWords = wrapperContent(listingLetters, 'donutWords');
    const infoContent = wrapperContent(renderContent, 'panelGame');

    printLetterGame.appendChild(donutWords);
    printLetterGame.appendChild(infoContent);
}
function showQuestions(){

}
function showEachQuestions(questions, counter){
   questions.forEach(item => {
       const numberQuestions = tryQuestion();
       const questionItem =(questions[counter].questions[numberQuestions].question)
       const questionAnswer =(questions[counter].questions[numberQuestions].answer);
       const questionStatus =(questions[counter].status);
       return [questionStatus, questionAnswer, questionItem];
   })
}

function play(){
    const [letters, titleGame, infoGame, arrayQuestions] = getInfo(questions);
    const counter = 0;
    const listLetters = listingLetters(letters);
    const controls = initPlay(titleGame, infoGame);
    showEachQuestions(arrayQuestions, counter)
    printGame(listLetters, controls);
}
function initGame(status, answer, question){
  play(status, answer, question);

}
window.onload = initGame;
