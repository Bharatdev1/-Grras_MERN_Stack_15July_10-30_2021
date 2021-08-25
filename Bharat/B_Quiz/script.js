const QuizDB=[
    {
        question:"Q1: What is full form of html ?",
        a:"Happy Holi Markup Language",
        b:"Happy Text Markup Language",
        c:"My Text Markup Language",
        d:"Hyper Text Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2: What is full form of CSS ?",
        a:"Cascading Style Sheets",
        b:"Coal Style Sheets",
        c:"Hot Style Sheets",
        d:"cool Style Sheets",
        ans:"ans1"
    },
    {
        question:"Q3: What is full form of HTTP ?",
        a:"Hyper Transfer Protoco",
        b:"hytext Transfer Protocol",
        c:"Your Transfer Protocol",
        d:"Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question:"Q4: What is full form of JS ?",
        a:"JavaScript",
        b:"JScript",
        c:"JsonSCript",
        d:"JJScript",
        ans:"ans1"
    }
];

const question = document.querySelector('.Question')
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
      
const answers =document.querySelectorAll('.answer');
const showScore =document.querySelector('#showScore');



let QuestionCount=0;
let score=0;

const loadQuestion=()=>{
    const questionList = QuizDB[QuestionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
    // option1.innerText
}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};


const deselectall=()=>{
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked=false;
    })
} ;

submit.addEventListener('click',()=>{
    const chectAnswer=getCheckAnswer();
    // console.log(chectAnswer);
    if (chectAnswer === QuizDB[QuestionCount].ans){
        score++
    };
    QuestionCount++;
    
    deselectall();
    if (QuestionCount < QuizDB.length ){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3>You Scored ${score}/${QuizDB.length} 😍 ❤</h3>
        <button class="btn" onclick="location.reload()">Restart</button>
        `;
        showScore.classList.remove("scoreArea");
    }
})