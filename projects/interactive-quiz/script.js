const questionEl = document.getElementById('question');
const options = document.querySelectorAll('.option-btn');
const scoreEl = document.getElementById('score');

let score = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: 0
    },
    {
        question: "Which fruit is typically red?",
        options: ["Apple", "Banana", "Orange", "Grapes"],
        answer: 0
    },
    {
        question: "Which season comes after spring?",
        options: ["Summer", "Autumn", "Winter", "Spring"],
        answer: 0
    }
];

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    options.forEach((btn, index) => btn.textContent = q.options[index]);
}

options.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if(index === questions[currentQuestion].answer) score++;
        currentQuestion++;
        if(currentQuestion < questions.length) {
            loadQuestion();
        } else {
            questionEl.textContent = "Quiz Completed!";
            options.forEach(btn => btn.style.display = "none");
            scoreEl.textContent = `Score: ${score} / ${questions.length}`;
        }
    });
});

loadQuestion();