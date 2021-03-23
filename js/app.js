 import questions from "./data.js";
 import data from "./data.js";


 function tryQuestion(){
     let index;
     return index = Math.floor(Math.random() * (0-3) + 3);
 }
 function getQuestions(arrayQuestions){
     const dataQuestion = [];
     const counterQuestions = 0;

     arrayQuestions.forEach(item => {
         const indexQuestion = tryQuestion();
         const {status, questions} = item;
         const answer = questions[indexQuestion].answer;
         const question = questions[indexQuestion].question;
         dataQuestion.push({'status': status, 'answer': answer, 'question':question})
     })
     return [dataQuestion, counterQuestions]

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
        const unansweredQuestions = questionsList.filter(item => item.status === 0);
        if(unansweredQuestions.length >=1){
            printQuestion(unansweredQuestions, counter, getWrapperQuestions);
        }
}

function printQuestion(questions, counter, wrapper){

     if(counter < questions.length){
         wrapper.innerHTML = questions[counter].question
     }
}


function initGame(){
    const [arrayQuestions, counterQuestion] = getQuestions(questions);
    const play = document.getElementById('playBtn');
    play.addEventListener('click', function(){
        playGame(arrayQuestions, counterQuestion);
    });

    return [arrayQuestions, counterQuestion];

}
window.onload = initGame;
