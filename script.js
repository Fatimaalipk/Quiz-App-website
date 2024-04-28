

const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup  Language",
        c: "HyperText  Makeup  Language",
        d: "HyperText  Makeup  Language",
        ans: "ans4"
     

    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "caseCading Style Sheets",
        b: "caseCading Style Sheep",
        c: "cartoon Style Sheets",
        d: "caseCading Super Sheets",
        ans: "ans1"

    },
    {
        question: "Q3: What is the full form of HTTPS?",
        a: "HyperText  Transfer Product",
        b: "HyperText  Test Product",
        c: "Hey  Transfer Protocol",
        d: "HyperText  Transfer Protocol",
        ans: "ans4"
     

    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"

    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    let questionList = quizDB[questionCount];
 question.innerHTML = questionList.question ;

 option1.innerHTML = questionList.a;
 option2.innerHTML = questionList.b;
 option3.innerHTML = questionList.c;
 option4.innerHTML = questionList.d;
}
loadQuestion();
 const getheckedAnswer = () => {
    let answer;
    answers.forEach((curElmAnswer) => {
        if(curElmAnswer.checked){
           answer = curElmAnswer.id;
        }
       

    });
    return answer;

 };
 const deselectedAll = () => {
    answers.forEach((curElmAnswer) => curElmAnswer.checked = false);
 }
submit.addEventListener('click', () => {
    const checkedAnswer = getheckedAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectedAll();

    if(questionCount < quizDB.length){
        loadQuestion();  
    }
    else{
        showScore.innerHTML = `
        <img src="./images (28).jpg" alt="">
        <h3>Your Score: ${score}/${quizDB.length}</h3>
        <p>Congratulaion App Quiz</p>
        <button class="btn"= onclick="
        location.reload()">Play Again</button>`;
        showScore.classList.remove('scoreArea')
  
      
      }
});


