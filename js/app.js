 import questions from "./data.js";
 import data from "./data.js";



function isUser(){

    const introUser = document.querySelector('.intro-user');
    const submitName = document.querySelector('.js-submit');
    introUser.classList.contains('hidden') ? introUser.classList.remove('hidden') : undefined;

    submitName.addEventListener('click', function(){
        getUser()
    })

}

 function getUser(){
     const userName = document.querySelector('.js-user').value;
     if(userName === '' || userName === undefined){
         alert('Has de introducir un nombre para poder jugar')
     }else{
         document.querySelector('.intro-user').classList.add('hidden');
         document.querySelector('.wellcome-game').classList.remove('hidden');
     }
     const user = userName;
     const points = 0;
     initGame(user,points)
 }


function tryQuestion(){
     return  Math.floor(Math.random() * (0-3) + 3);
 }
function getQuestions(arrayQuestions, userName){
     const dataQuestion = [];
     const counter = { number: 0 };

     const updateCurrentQuestion = () => {
        const questions = dataQuestion.slice(0, counter.number + 1);
         const questions2 = dataQuestion.slice(counter.number + 1);
         const foundArray = [ ...questions2, ...questions];
         const nextQuestion = foundArray.find(({ status }) => status === 0);

        if(nextQuestion) {
            counter.number = dataQuestion.findIndex(({ letter }) => letter === nextQuestion.letter);
        } else {
            endGame(dataQuestion, userName);
        }
     }

     arrayQuestions.forEach(item => {
         const indexQuestion = tryQuestion();
         const {status, questions, letter} = item;
         const answer = questions[indexQuestion].answer;
         const question = questions[indexQuestion].question;
         dataQuestion.push({'status': status, 'answer': answer, 'question':question, letter})
     })
     return [dataQuestion, counter, updateCurrentQuestion]

 }
function playGame(arrayQuestions, counterQuestion){
        console.log('play ' + counterQuestion)
     const hideGreetings = document.querySelector('.wellcome-game');
     const showControls = document.querySelector('.panel-game');

     hideGreetings ? hideGreetings.classList.add('hidden') : null;
     showControls ? showControls.classList.remove('hidden') : null;

     showQuestions(arrayQuestions, counterQuestion);

 }

const players = [];

function rankingPlayers(userName, correctQuestion){
     userName && correctQuestion ? players.push({userName, correctQuestion}) : null;
     players.sort((a, b) =>  (a.correctQuestion < b.correctQuestion) ? 1 : -1);
     players.forEach((item, index) => {console.log(`Position:,  ${index += 1}, Player Name: ${item.userName}, Points: ${item.correctQuestion} `)})
     return players;
 }
function endGame(arrayFinalized, userName){
    const correctAnswered = arrayFinalized.filter(({status}) => status === 1 );
    const userPoints = correctAnswered.length;
    rankingPlayers(userName, userPoints);
    resetGame(arrayFinalized);
     const isRestartGame = window.confirm('Do you like restart game?');
     if(isRestartGame){
     }

 }
function resetGame(arrayFinalized){
    arrayFinalized.forEach((item) => item.status = 0);
    updateQuestionBullets(arrayFinalized);
    isUser();

 }

function showQuestions(questionsList, counter){
        
        const getWrapperQuestions = document.querySelector('.definition');
        printQuestion(questionsList, counter, getWrapperQuestions);
}

function printQuestion(questions, counter, wrapper){

     if(counter < questions.length){
         const itemQuestion = document.createElement('h2');
         itemQuestion.classList.add('item-questions');
         itemQuestion.innerHTML = questions[counter].question;
         wrapper.appendChild(itemQuestion);
     }
}

function passWord(questionList, counter){
     document.querySelector('.item-questions').remove();
     showQuestions(questionList, counter);
}

function updateQuestionBullets (questions) {
     const passWordButton = document.querySelectorAll('.js-question-bullets li');
    questions.forEach(({ status }, index) => {
        if(status !== 0) {
            const className = status === 1 ? 'correct' : 'incorrect';
            passWordButton[index].classList.add(className);
        }
        if(status === 0){
            const className = status === 1 ? 'correct' : 'incorrect';
            passWordButton[index].classList.remove(className);
        }
    });
 }

const time = document.querySelector('.js-countdown');
let timeSecond = 300;

function displayTime(second){
    const sec = Math.floor(second % 60);
    console.log(sec)
    time.innerHTML = `${sec < 10 ? '0':''}${sec}`;
}

function endTime(){
    time.innerHTML = '0';
    endGame();
}

function initGame(userName, userPoints){

   document.querySelector('.wellcome-game > h2').innerHTML = `BIENVENIDO ${userName.toUpperCase()} AL JUEGO DE PASAPALABRA DE SKYLAB CODERS ACADEMY!`;
    const [arrayQuestions, counterQuestion, addCounter] = getQuestions(questions);
    const play = document.getElementById('playBtn');
    const passWordButton = document.querySelector('.js-pass-to-word');
    const enterButton = document.querySelector('.js-enter');
    const enteredWord = document.querySelector('.js-word');

     play.addEventListener('click', function(){
        playGame(arrayQuestions, counterQuestion.number);
        const countDown = setInterval(()=>{
                    timeSecond--;
                    displayTime(timeSecond);
                    if(timeSecond <= 0 || timeSecond < 1){
                        endTime();
                        clearInterval(countDown);
                    }
                },1000)
    });
     passWordButton.addEventListener('click', function(){
        addCounter();
        passWord(arrayQuestions, counterQuestion.number);
    });
     enterButton.addEventListener('click', function(){
         const { answer } = arrayQuestions[counterQuestion.number];
         const word = enteredWord.value;
         arrayQuestions[counterQuestion.number].status = word === answer ? 1 : 2;
         addCounter();
         passWord(arrayQuestions, counterQuestion.number);
         updateQuestionBullets(arrayQuestions);
    });
     enteredWord.addEventListener('keyup', function(event){
        if(event.key === 'Enter'){
            const { answer } = arrayQuestions[counterQuestion.number];
            const word = enteredWord.value;
            arrayQuestions[counterQuestion.number].status = word === answer ? 1 : 2;
            addCounter();
            passWord(arrayQuestions, counterQuestion.number);
            updateQuestionBullets(arrayQuestions);
            enteredWord.value = '';
        }
        if(event.keyCode === 32){
             addCounter();
             passWord(arrayQuestions, counterQuestion.number);
             updateQuestionBullets(arrayQuestions);
         }
     })

}

window.onload = isUser;
