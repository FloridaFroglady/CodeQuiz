var startEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var quizboxEl = document.getElementById("quizbox");
var scoreboxEl = document.getElementById("scorebox");
var queryEl = document.getElementById("query");
var quizDisplayEl = document.getElementById("quizDisplay");

//event listener for start button
document.getElementById("start").addEventListener("click", startQuiz);
//start timer
//create div in HTML to display questions and answers (create element ol and li)
//detect answer click and correctness
//deduct 5 seconds for incorrect answers
//display next question
//end if all questions answered 
//end if timer expires
//calculate score
//display score
//store score locally in high score table


var questions = [
{
q: "Which data type is '36'?",
a: "number",
b: "bigint",
c: "boolean",
d: "string",
correct: "d"
},

{
q: "What is the symbol for strict equality?",
a: "=",
b: "==",
c: "===",
d: "!==",
correct: "c"
},

{
q: "What does the + symbol do?",
a: "addition only",
b: "addition or concatenation",
c: "addition or assignment",
d: "assignment or concatenation",
correct: "b"
},

{
q: "What is a function called by an event?",
a: "event listener",
b: "event trigger",
c: "event handler",
d: "event organizer",
correct: "c"
},

{
q: "What are the generic variables in a function's argument list?",
a: "arguments",
b: "function variables",
c: "parameters",
d: "placeholders",
correct: "c"
},

{
q: "What does the array method .pop() do?",
a: "remove the last array item",
b: "remove an array item by index",
c: "remove the first array item",
d: "add an array item at the end of the array",
correct: "a"
}
];



function startQuiz() {
  
    for (i=0; i < questions.length; i++) {
        var currentQuestion = questions[i].q;
        var h2New = document.createElement("h2")
        var liNewA = document.createElement("li");
        var liNewB = document.createElement("li");
        var liNewC = document.createElement("li");
        var liNewD = document.createElement("li");
        
        h2New.textContent=currentQuestion;
        liNewA.textContent=questions[i].a;
        liNewB.textContent=questions[i].b;
        liNewC.textContent=questions[i].c;
        liNewD.textContent=questions[i].d;
        
        quizDisplayEl.appendChild(h2New);
        quizDisplayEl.appendChild(liNewA);
        quizDisplayEl.appendChild(liNewB);
        quizDisplayEl.appendChild(liNewC);
        quizDisplayEl.appendChild(liNewD);
        ;
    }
    

}