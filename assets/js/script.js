

var timerElement = document.querySelector(".timer-count");
var form = ' <h2>placeholder</h2><form><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1">Default radio</label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked><label class="form-check-label" for="flexRadioDefault2">Default checked radio</label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked><label class="form-check-label" for="flexRadioDefault2">Default checked radio</label></div></form>';
var submitBtn = '<button type="button" class="btn btn-primary" id="submit">Submit</button>'
var timerCount = 60;

document.getElementById('start').addEventListener("click", function () {
    document.getElementById('start').style.display = 'none';
    document.getElementById("form").insertAdjacentHTML("afterend", form);
    document.getElementById('btn').insertAdjacentHTML("afterbegin", submitBtn);
})


function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}


// example below



    // Variables
    // const quizContainer = document.getElementById('quiz');
    // const resultsContainer = document.getElementById('results');
    // const submitButton = document.getElementById('submit');
    // const myQuestions = [
    //   {
    //     question: "Who invented JavaScript?",
    //     answers: {
    //       a: "Douglas Crockford",
    //       b: "Sheryl Sandberg",
    //       c: "Brendan Eich"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "Which one of these is a JavaScript package manager?",
    //     answers: {
    //       a: "Node.js",
    //       b: "TypeScript",
    //       c: "npm"
    //     },
    //     correctAnswer: "c"
    //   },
    //   {
    //     question: "Which tool can you use to ensure code quality?",
    //     answers: {
    //       a: "Angular",
    //       b: "jQuery",
    //       c: "RequireJS",
    //       d: "ESLint"
    //     },
    //     correctAnswer: "d"
    //   }
    // ];

