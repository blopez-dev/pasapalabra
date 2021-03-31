import questions from "./data.js";


const gameStatus = {
    interval: null,
    time: 120,
    questions: null,
    userName: '',
    points: 0,
    resetGame() {
        clearInterval(gameStatus.interval);
        gameStatus.time = 120;
        displayTime(gameStatus.time);
    },
};

function toggleGamePanel() {
    const gamePanel = document.querySelector('.js-panel-game');
    gamePanel.classList.toggle('hidden');
}

function showIntro() {
    const introUser = document.querySelector('.intro-user');
    introUser.classList.contains('hidden') ? introUser.classList.remove('hidden') : undefined;
    displayTime(gameStatus.time);
    toggleGamePanel();
}

function getUser() {
    const userName = document.querySelector('.js-user').value;
    if (userName === '' || userName === undefined) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        })

        Toast.fire({
            icon: 'error',
            title: 'Debes insertar un nombre'
        })
    } else {
        document.querySelector('.intro-user').classList.add('hidden');
        document.querySelector('.wellcome-game').classList.remove('hidden');

    }
    gameStatus.userName = userName;
    document.querySelector('.js-user').value = '';
    gameStatus.questions = getQuestions(questions, userName);

}

function tryQuestion() {
    return Math.floor(Math.random() * (0 - 3) + 3);
}

function getQuestions(arrayQuestions, userName) {
    const dataQuestion = [];
    const counter = {number: 0};

    const updateCurrentQuestion = () => {
        const questions = dataQuestion.slice(0, counter.number + 1);
        const questions2 = dataQuestion.slice(counter.number + 1);
        const foundArray = [...questions2, ...questions];
        const nextQuestion = foundArray.find(({status}) => status === 0);

        if (nextQuestion) {
            counter.number = dataQuestion.findIndex(({letter}) => letter === nextQuestion.letter);
        } else {
            endGame(dataQuestion, userName);
        }
    }

    arrayQuestions.forEach(item => {
        const indexQuestion = tryQuestion();
        const {status, questions, letter} = item;
        const answer = questions[indexQuestion].answer;
        const question = questions[indexQuestion].question;
        dataQuestion.push({'status': status, 'answer': answer, 'question': question, letter})
    })
    return [dataQuestion, counter, updateCurrentQuestion]
}

function playGame() {
    const hideGreetings = document.querySelector('.wellcome-game');
    hideGreetings ? hideGreetings.classList.add('hidden') : null;

    showQuestions();
}
const wrapperPlayers = document.querySelector('#my-template .insert-players');

function tableRanking(playersRanking){
    wrapperPlayers.innerHTML = '';
    const table = document.createElement('table');
    table.classList.add('table-ranking' );
    const thTable = `<thead><th>Position</th><th>Player</th><th>Points</th></thead>`;
    table.innerHTML = thTable;
    playersRanking.forEach((item, index) => {
        let row = document.createElement('tr');
        let column = `<td>${index += 1}</td><td>${item.userName}</td><td>${item.correctQuestion}</td>`
        row.innerHTML = column;
        table.appendChild(row);
    })

    wrapperPlayers.appendChild(table);
}

const players = [];
const playersRow = [];
function rankingPlayers(userName, correctQuestion) {

    userName && players.push({userName, correctQuestion});
    players.sort((a, b) => (a.correctQuestion < b.correctQuestion) ? 1 : -1);

    console.log(players)
   players.forEach((item, index) => {
   console.log(`Posición: ${index += 1}, Player Name: ${item.userName}, Points: ${item.correctQuestion} `)
    })
    tableRanking(players)
    return players;
}

function endGame(arrayFinalized) {
    const [arrayQuestions] = gameStatus.questions;
    const correctAnswered = arrayQuestions.filter(({status}) => status === 1);
    const userPoints = correctAnswered.length;
    console.log('%c Rankin players -> ', 'background: #222; color: #bada55')



    rankingPlayers(gameStatus.userName, userPoints);


    resetGame(arrayFinalized);
    const isRestartGame = window.confirm('Do you like restart game?');

    if (isRestartGame) {
        gameStatus.resetGame();
    }
    Swal.fire({
        template: '#my-template'
    })
}

function resetGame(questions) {
    questions.forEach((item) => item.status = 0);
    updateQuestionBullets(questions);
    showIntro();
}

function showQuestions() {
    const getWrapperQuestions = document.querySelector('.definition');
    printQuestion(getWrapperQuestions);
}

function printQuestion(wrapper) {
    const [arrayQuestions, {number}] = gameStatus.questions;
    if (number < arrayQuestions.length) {
        const itemQuestion = document.createElement('h2');
        wrapper.innerHTML = '';
        itemQuestion.classList.add('item-questions');
        itemQuestion.innerHTML = arrayQuestions[number].question;
        wrapper.appendChild(itemQuestion);
    }
}

function passWord(questionList, counter) {
    document.querySelector('.item-questions').remove();
    showQuestions(questionList, counter);
}

function updateQuestionBullets(questions) {
    const passWordButton = document.querySelectorAll('.js-question-bullets li');
    questions.forEach(({status}, index) => {
        if (status !== 0) {
            const className = status === 1 ? 'correct' : 'incorrect';
            passWordButton[index].classList.add(className);
        }
        if (status === 0) {
            passWordButton[index].classList.remove('correct');
            passWordButton[index].classList.remove('incorrect');
        }
    });
}

function secondsToMinutes(time){
    return Math.floor(time / 60)+':'+(Math.floor(time % 60) || '00');
}

function displayTime(seconds) {
    const element = document.querySelector('.js-countdown');
    element.innerHTML = secondsToMinutes(seconds);
}

function endTime() {
    const time = document.querySelector('.js-countdown');
    time.innerHTML = '0';
   /* endGame();*/
}

function registerEvents() {
    const play = document.getElementById('playBtn');
    const passWordButton = document.querySelector('.js-pass-to-word');
    const enterButton = document.querySelector('.js-enter');
    const enteredWord = document.querySelector('.js-word');
    const submitName = document.querySelector('.js-submit');
    const inputName = document.querySelector('.js-user');
    const finalizedGame = document.querySelector('.js-end-to-game');
    const restartEndTime = document.querySelector('.js-restart-endTime');

    submitName.addEventListener('click', function () {
        getUser()
    });
    inputName.addEventListener('keyup', function(event){
        if (event.key === 'Enter') {
            getUser()
        }
    })
    play.addEventListener('click', function () {
        playGame();
        toggleGamePanel();
        gameStatus.interval = setInterval(() => {
            gameStatus.time--;
            displayTime(gameStatus.time);
            if (gameStatus.time <= 0) {
                Swal.fire({
                    template: '#endTime'
                })
                endTime(gameStatus.questions);
                gameStatus.resetGame();
                resetGame(questions);
                clearInterval(gameStatus.interval);
            }
        }, 1000)
    });
    passWordButton.addEventListener('click', function () {
        const [arrayQuestions, counterQuestion, addCounter] = gameStatus.questions;
        addCounter();
        passWord(arrayQuestions, counterQuestion.number);
    });
    enterButton.addEventListener('click', function () {
        const [arrayQuestions, counterQuestion, addCounter] = gameStatus.questions;
        const {answer} = arrayQuestions[counterQuestion.number];
        const word = enteredWord.value.toLowerCase();
        arrayQuestions[counterQuestion.number].status = word === answer ? 1 : 2;

        addCounter();
        passWord(arrayQuestions, counterQuestion.number);
        updateQuestionBullets(arrayQuestions);
        enteredWord.value = '';

    });
    enteredWord.addEventListener('keyup', function (event) {
        const [arrayQuestions, counterQuestion, addCounter] = gameStatus.questions;
        if (event.key === 'Enter') {
            const {answer} = arrayQuestions[counterQuestion.number];
            const word = enteredWord.value.toLowerCase();
            arrayQuestions[counterQuestion.number].status = word === answer ? 1 : 2;
            addCounter();
            passWord(arrayQuestions, counterQuestion.number);
            updateQuestionBullets(arrayQuestions);
            enteredWord.value = '';
        }
        if (event.keyCode === 32) {
            addCounter();
            passWord(arrayQuestions, counterQuestion.number);
            updateQuestionBullets(arrayQuestions);
        }
    })
    finalizedGame.addEventListener('click', function(){
       endTime(gameStatus.questions);
       const arrayFinalized = gameStatus.questions[0];
       let pointsFinalized = 0;
       arrayFinalized.filter(item => {
           item.status === 1 ? pointsFinalized += 1: undefined;
       });




        Swal.fire({
            title: 'Has Finalizado el juego',
            text: `Has acertado ${pointsFinalized.toString()} preguntas`,
        })
        gameStatus.resetGame();
        resetGame(questions);
        clearInterval(gameStatus.interval);

    })

}

window.onload = () => {
    registerEvents();
    showIntro();
};

