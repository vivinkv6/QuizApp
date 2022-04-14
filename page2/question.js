//list of questions
const Question = [
    {
        id: 1,
        question: "Inside which HTML element do we put the javacsript ?",
        option1: "&lt;scripting&gt;",
        option2: "&lt;js&gt;",
        option3: "&lt;script&gt;",
        answer: "&lt;script&gt;"
    },
    {
        id: 2,
        question: "What is the correct syntax for referring to an external script called 'abc.js' ?",
        option1: "&lt;script href='abc.js'&gt;",
        option2: "&lt;script name='abc.js'&gt;",
        option3: "&lt;script src='abc.js'&gt;",
        answer: "&lt;script src='abc.js'&gt;"
    },
    {
        id: 3,
        question: "How do you write 'Hello World' in an alertbox ?",
        option1: "alertBox('Hello World')",
        option2: "alert('Hello World')",
        option3: "msg('hello World')",
        answer: "alert('Hello World')"
    },
    {
        id: 4,
        question: "How do you create a function in javascript ?",
        option1: "function myfunction()",
        option2: "function:myfunction()",
        option3: "function=myfunction()",
        answer: "function myfunction()"
    },
    {
        id: 5,
        question: "How do you call a function named 'myfunction' ?",
        option1: "myfunction()",
        option2: "call myfunction()",
        option3: "call function myfunction()",
        answer: "myfunction()"
    },
    {
        id: 6,
        question: "How to write IF statement in javascript ?",
        option1: "if i=5 then",
        option2: "if(i==5)",
        option3: "if i=5",
        answer: "if(i==5)"
    },
    {
        id: 7,
        question: "How can you add a comment  in a javascript ?",
        option1: "'This is a comment'",
        option2: "//This is a comment",
        option3: "&lt;!--This is a comment--&gt",
        answer: "//This is a comment"
    },
    {
        id: 8,
        question: "How do you round the number 7.25, to the nearest integer ?",
        option1: "round(7.25)",
        option2: "Math.round(7.25)",
        option3: "rnd(7.25)",
        answer: "Math.round(7.25)"
    },
    {
        id: 9,
        question: "How do you find the number with the highest value of x and y ?",
        option1: "ceil(x,y)",
        option2: "Math.max(x,y)",
        option3: "Math.ceil(x,y)",
        answer: "Math.max(x,y)"
    },
    {
        id: 10,
        question: "which event occurs when the user clicks on an HTML element ?",
        option1: "onclick",
        option2: "onmouseclick",
        option3: "onchange",
        answer: "onclick"
    },
]

//question1
let q1 = document.querySelector(".question1");
let q1op1 = document.querySelector(".q1op1");
let q1op2 = document.querySelector(".q1op2");
let q1op3 = document.querySelector(".q1op3");

//question2
let q2 = document.querySelector(".question2");
let q2op1 = document.querySelector(".q2op1");
let q2op2 = document.querySelector(".q2op2");
let q2op3 = document.querySelector(".q2op3");

//question3
let q3 = document.querySelector(".question3");
let q3op1 = document.querySelector(".q3op1");
let q3op2 = document.querySelector(".q3op2");
let q3op3 = document.querySelector(".q3op3");

//question4
let q4 = document.querySelector(".question4");
let q4op1 = document.querySelector(".q4op1");
let q4op2 = document.querySelector(".q4op2");
let q4op3 = document.querySelector(".q4op3");

//question5
let q5 = document.querySelector(".question5");
let q5op1 = document.querySelector(".q5op1");
let q5op2 = document.querySelector(".q5op2");
let q5op3 = document.querySelector(".q5op3");

//question6
let q6 = document.querySelector(".question6");
let q6op1 = document.querySelector(".q6op1");
let q6op2 = document.querySelector(".q6op2");
let q6op3 = document.querySelector(".q6op3");

//question7
let q7 = document.querySelector(".question7");
let q7op1 = document.querySelector(".q7op1");
let q7op2 = document.querySelector(".q7op2");
let q7op3 = document.querySelector(".q7op3");

//question8
let q8 = document.querySelector(".question8");
let q8op1 = document.querySelector(".q8op1");
let q8op2 = document.querySelector(".q8op2");
let q8op3 = document.querySelector(".q8op3");

//question9
let q9 = document.querySelector(".question9");
let q9op1 = document.querySelector(".q9op1");
let q9op2 = document.querySelector(".q9op2");
let q9op3 = document.querySelector(".q9op3");

//question10
let q10 = document.querySelector(".question10");
let q10op1 = document.querySelector(".q10op1");
let q10op2 = document.querySelector(".q10op2");
let q10op3 = document.querySelector(".q10op3");

//Button
let btn=document.querySelector(".btn");

//Disable the submit button after 5 minutes using Submition function
function Submition() {
    btn.disabled = false;
    setTimeout(()=>{
      btn.disabled = true;
      console.log('Button Deactivated')}, 300000);
  }
 

//show questions and their respective options in html through javascript function named showQuestionAnswer()

function showQuestionAnswer() {

    //display question1 objects
    q1.innerHTML = Question[0].id + ". " + Question[0].question;
    q1op1.innerHTML = Question[0].option1;
    q1op2.innerHTML = Question[0].option2;
    q1op3.innerHTML = Question[0].option3;

    //display question2 objects
    q2.innerHTML = Question[1].id + ". " + Question[1].question;
    q2op1.innerHTML = Question[1].option1;
    q2op2.innerHTML = Question[1].option2;
    q2op3.innerHTML = Question[1].option3;

    //display question3 objects
    q3.innerHTML = Question[2].id + ". " + Question[2].question;
    q3op1.innerHTML = Question[2].option1;
    q3op2.innerHTML = Question[2].option2;
    q3op3.innerHTML = Question[2].option3;

    //display question4 objects
    q4.innerHTML = Question[3].id + ". " + Question[3].question;
    q4op1.innerHTML = Question[3].option1;
    q4op2.innerHTML = Question[3].option2;
    q4op3.innerHTML = Question[3].option3;

    //display question5 objects
    q5.innerHTML = Question[4].id + ". " + Question[4].question;
    q5op1.innerHTML = Question[4].option1;
    q5op2.innerHTML = Question[4].option2;
    q5op3.innerHTML = Question[4].option3;

    //display question6 objects
    q6.innerHTML = Question[5].id + ". " + Question[5].question;
    q6op1.innerHTML = Question[5].option1;
    q6op2.innerHTML = Question[5].option2;
    q6op3.innerHTML = Question[5].option3;

    //display question7 objects
    q7.innerHTML = Question[6].id + ". " + Question[6].question;
    q7op1.innerHTML = Question[6].option1;
    q7op2.innerHTML = Question[6].option2;
    q7op3.innerHTML = Question[6].option3;

    //display question8 objects
    q8.innerHTML = Question[7].id + ". " + Question[7].question;
    q8op1.innerHTML = Question[7].option1;
    q8op2.innerHTML = Question[7].option2;
    q8op3.innerHTML = Question[7].option3;

    //display question9 objects
    q9.innerHTML = Question[8].id + ". " + Question[8].question;
    q9op1.innerHTML = Question[8].option1;
    q9op2.innerHTML = Question[8].option2;
    q9op3.innerHTML = Question[8].option3;

    //display question10 objects
    q10.innerHTML = Question[9].id + ". " + Question[9].question;
    q10op1.innerHTML = Question[9].option1;
    q10op2.innerHTML = Question[9].option2;
    q10op3.innerHTML = Question[9].option3;
}

//Countdown function
function startTimer(duration, display, callback) {
    var timer = duration,
      minutes, seconds;

var myInterval = setInterval(function() {
   minutes = parseInt(timer / 60, 10)
   seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      
      // clear the interal
      clearInterval(myInterval);

      // use the callback
      if(callback) {
          callback();
      }
    }
  }, 1000)};


window.onload = function() {
  var time = 300,// 1 minute=60 seconds,Here 300  denote 5 minutes ie, 300 seconds -> 5 minutes
    display = document.querySelector('.clock');
  startTimer(time, display, function() { alert('Times Up'); });
};
//call the function to display questions and options in html
showQuestionAnswer();

//call the function to disable submit button
Submition();
