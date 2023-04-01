var startEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var quizboxEl = document.getElementById("quizbox");
var scoreboxEl = document.getElementById("scorebox");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var aEl = document.getElementById("liA");
var bEl = document.getElementById("liB");
var cEl = document.getElementById("liC");
var dEl = document.getElementById("liD");
var correctCount = 0;

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
  answers: ["number", "bigint", "boolean", "string"],
  correct: "d"
  },
  
  {
  q: "What is the symbol for strict equality?",
  answers: ["=", "==", "===","!=="],
  correct: "c"
  },
  
  {
  q: "What does the + symbol do?",
  answers: ["addition only", "addition or concatenation", "addition or assignment", "assignment or concatenation"],
  correct: "b"
  },
  
  {
  q: "What is a function called by an event?",
  answers: ["event listener", "event trigger", "event handler", "event organizer"],
  correct: "c"
  },
  
  {
  q: "What are the generic variables in a function declaration's argument list?",
  answers: ["arguments", "function variables", "parameters", "placeholders"],
  correct: "c"
  },
  
  {
  q: "What does the array method .pop() do?",
  answers: ["remove the last array item", "remove an array item by index","remove the first array item", "add an array item at the end of the array"],
  correct: "a"
  }
  ];

 function checkAnswer(event) {
  console.log(event.target);
   console.log(event.target.value);
  
   if (event.target.value = questions[i].correct) {
    startQuiz();
  }
    else {
      timer - 5000;
      startQuiz();
    }
  }  


 function startQuiz() {
  for (i = 0;i < questions.length; i++){
    
   questionEl.textContent = questions[i].q;
   aEl.textContent = questions[i].answers[0];
   bEl.textContent = questions[i].answers[1];
   cEl.textContent = questions[i].answers[2];
   dEl.textContent = questions[i].answers[3];
 
   choicesEl.appendChild(aEl);
   choicesEl.appendChild(bEl);
   choicesEl.appendChild(cEl);
   choicesEl.appendChild(dEl);

   aEl.addEventListener("click", checkAnswer);
   bEl.addEventListener("click", checkAnswer);
   cEl.addEventListener("click", checkAnswer);
   dEl.addEventListener("click", checkAnswer);
   
    }  
   
 }
