const questions = [
   {
      question : "What is the largest animal in the world?",
      answers:[
         {text:"Shark" , correct : false},
         {text:"Blue shark" , correct : true},
         {text:"Elephant" , correct : false},
         {text:"Giraffe" , correct : false},
      ]
   },
   {
      question : "What is the smallest country in the world?",
      answers:[
         {text:"Vatican city" , correct : true},
         {text:"Bhutan" , correct : false},
         {text:"Nepal" , correct : false},
         {text:"Shri Lanka" , correct : false},
      ]
   },
   {
      question : "What is the largest desert in the world?",
      answers:[
         {text:"Kalahari" , correct : false},
         {text:"Gobi" , correct : false},
         {text:"Sahara" , correct : false},
         {text:"Antarctica" , correct : true},
      ]
   },
   {
      question : "What is the smallest continent in the world?",
      answers:[
         {text:"Asia" , correct : false},
         {text:"Australia" , correct : true},
         {text:"Arctic" , correct : false},
         {text:"Africa" , correct : false},
      ]
   },
]

let quiz = document.querySelector(".quiz");
let question = document.getElementById("question");
let answerBtns = document.getElementById("answerBtns")
let nextBtn = document.getElementById("nextBtn");
let currentQuestionIndex = 0 ;
let score = 0 ;
function startQuiz() {
   currentQuestionIndex = 0 ;
   score = 0 ;
   nextBtn.innerHTML = 'Next'
   nextBtn.display = "none"
   showQuestions();
}
function showQuestions() {
   question.innerHTML = `${currentQuestionIndex+1}. ${questions[currentQuestionIndex].question}`
   answerBtns.innerHTML = `
      <button class="btn">${questions[currentQuestionIndex].answers[0].text}</button>
      <button class="btn">${questions[currentQuestionIndex].answers[1].text}</button>
      <button class="btn">${questions[currentQuestionIndex].answers[2].text}</button>
      <button class="btn">${questions[currentQuestionIndex].answers[3].text}</button>
   `
   nextBtn.style.display = "none"
}
answerBtns.onclick = function (e) {
   if (e.target.classList.contains("btn")) {
      questions[currentQuestionIndex].answers.map(answer => {
         if (e.target.innerHTML == answer.text) {
            if (answer.correct) {
               e.target.classList.add("correct")
               score++;
            }else {
               e.target.classList.add("incorrect")
               questions[currentQuestionIndex].answers.map(answer => {
                  if (answer.correct) {
                     document.querySelectorAll(".btn").forEach(button => {(button.innerHTML==answer.text)?button.classList.add("correct"):""})
                  }
               })
            }
         }
      })
      document.querySelectorAll(".btn").forEach(button => { button.disabled = true })
      nextBtn.style.display = "block"
   }
}
nextBtn.onclick = ()=> {
   currentQuestionIndex++ ;
   if (nextBtn.classList.contains("playAgain")) {
      nextBtn.classList.remove("playAgain")
      startQuiz()
   }
   if (currentQuestionIndex == 4) {
      answerBtns.innerHTML = `<h2 style='color:orange;'>your score is <span style='color:blue;' >${score}</span> out of ${questions.length}</h2>`
      nextBtn.innerHTML = 'Play Again'
      nextBtn.classList.add("playAgain")
   }else {
      showQuestions()
   }
}


startQuiz()
