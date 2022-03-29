var formEl = document.getElementById('form');
var newScore = {
    "score": 0,
    "initials":""
}
var scores = JSON.parse(localStorage.getItem('scores'));
var questionIndex = 0;
const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {   //not using yet
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {   //not using yet
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "ESLint"

        },
        correctAnswer: "c"
    }
];

var timerElement = document.querySelector(".timer-count");

var submitBtn = '<button type="button" class="btn btn-primary" id="submit">Submit</button>';
var timerCount = 60;

var form = ' <h2>' + myQuestions[questionIndex].question +
    '</h2><form><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="a"><label class="form-check-label" for="flexRadioDefault1">' + myQuestions[questionIndex].answers.a +
    '</label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="b"checked><label class="form-check-label" for="flexRadioDefault2">' + myQuestions[questionIndex].answers.b +
    '</label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="c"checked><label class="form-check-label" for="flexRadioDefault2">' + myQuestions[questionIndex].answers.c +
    '</label></div></form>';

document.getElementById('start').addEventListener("click", function () {

    document.getElementById('start').style.display = 'none';
    
    document.getElementById('introText').style.display = 'none';
    formEl.insertAdjacentHTML("afterbegin", form);
    document.getElementById('btn').insertAdjacentHTML("afterbegin", submitBtn);

    startTimer();
    submit();
})

function submit() {
    document.getElementById('submit').addEventListener("click", function () {

        var a = document.querySelector('input[name=flexRadioDefault]:checked').getAttribute('id');
        if (a == myQuestions[questionIndex].correctAnswer) {
            console.log("Yay right answer!");
            newScore.score++;
            questionIndex++;
            formEl.innerHTML = '';
            if (questionIndex < myQuestions.length) {
                form = ' <h2>' + myQuestions[questionIndex].question +
                    '</h2><form><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="a"><label class="form-check-label" for="flexRadioDefault1">' + myQuestions[questionIndex].answers.a +
                    '</label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="b"checked><label class="form-check-label" for="flexRadioDefault2">' + myQuestions[questionIndex].answers.b +
                    '</label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="c"checked><label class="form-check-label" for="flexRadioDefault2">' + myQuestions[questionIndex].answers.c +
                    '</label></div></form>';


                formEl.insertAdjacentHTML("afterbegin", form);

            } else {
                clearInterval(timer);
                document.getElementById('submit').style.display = 'none';
                document.getElementById('timer').style.display = 'none';
                var gameOver = '<h3>GAME OVER!!!</h3><div class="row justify-content-between"><div class="col-3"><label for="inputInitial" class="form-label">initials</label><input type="text" id="inputInitial" class="form-control"></div><div class="col-3"><p> Score-' + newScore.score +
                    '</p></div></div>'
                formEl.insertAdjacentHTML("afterbegin", gameOver);
                var gameBtn = '<button type="button" class="btn btn-primary" id="gameBtn">Submit</button>';
                document.getElementById('btn').insertAdjacentHTML("afterbegin", gameBtn);
                document.getElementById('gameBtn').addEventListener("click", function () {
                    var initials = document.querySelector('input[id=inputInitial]').value;
                    newScore.initials = initials
                    console.log(scores)
                  if (scores == null){
                    var allScores = [];
                    allScores.push(newScore);
                    localStorage.setItem("scores", JSON.stringify(allScores));
                  }else{
                      scores.unshift(newScore);
                      localStorage.setItem("scores", JSON.stringify(scores));

                  }
                })
            }
        }
        console.log(a);
    })
}



//finish setting up timer
var timer;
function startTimer() {
    // Sets timer

    timer = setInterval(function () {
        timerCount--;
        console.log(timerCount);
        if (timerCount == 0) {
            clearInterval(timer);
        }
    }, 1000);
}






    // Variables
    // const quizContainer = document.getElementById('quiz');
    // const resultsContainer = document.getElementById('results');
    // const submitButton = document.getElementById('submit');


