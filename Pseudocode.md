
HTML

1.Start screen with title, rules, start button, timer.
2. Question screen container with question text, buttons, timer, feedback on answer selection
3. End of game container with fnal score, form to ender highscore initials, and a submit button
4. Highscore page

JS

1. Declare variables to reference DOM elements in HTML document

-start quiz button, startscreen element, timer element, highscore element, question element, question title elements, answer choice element

2. Create array of objects that hold all questions
    -answer choices
    -question text
    -correct answers

3. Create a startQuiz() function trigered by the startQuizbutton
    -hide start screen
    -unhide questions
    -starts timer
    -grab first question in the array

4.Create a function to getQuestion()
    -renders title, choices an buttons

5. Create a function to check if answer is correct
    -if answer is correct, then move on to next question
    -if answer if wrong, decrement timer and move on to next question
    -keep track of score/points
    -increment index in array of questions to move on

6. Create function to end quiz
 -hide question elements
 -unhide end of quiz element
 -unhide final score element, form, submit button

7.Creat function to save high scores to localstorage