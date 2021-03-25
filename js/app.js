 import questions from "./data.js";
 import data from "./data.js";


 function tryQuestion(){
     return  Math.floor(Math.random() * (0-3) + 3);
 }
 function getQuestions(arrayQuestions){
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
            alert('Final')
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
     const hideGreetings = document.querySelector('.wellcome-game');
     const showControls = document.querySelector('.panel-game');

     hideGreetings ? hideGreetings.classList.add('hidden') : null;
     showControls ? showControls.classList.remove('hidden') : null;

     showQuestions(arrayQuestions, counterQuestion);

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
    });
 }

 function initGame(){
    const [arrayQuestions, counterQuestion, addCounter] = getQuestions(questions);
    const play = document.getElementById('playBtn');
    const passWordButton = document.querySelector('.js-pass-to-word');
    const enterButton = document.querySelector('.js-enter');
    const enteredWord = document.querySelector('.js-word');

    play.addEventListener('click', function(){
        playGame(arrayQuestions, counterQuestion.number);
    });
    passWordButton.addEventListener('click', function(){
        addCounter();
        passWord(arrayQuestions, counterQuestion.number);
    });
     enterButton.addEventListener('click', function(){
         const { answer } = arrayQuestions[counterQuestion.number];
         const word = enteredWord.value;
         arrayQuestions[counterQuestion.number].status = word === answer ? 1 : 2;

         console.log(counterQuestion)
         addCounter();
         passWord(arrayQuestions, counterQuestion.number);
         updateQuestionBullets(arrayQuestions);
    });
}
window.onload = initGame;
