const quizData = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "float"],
        correct: "var"
    },
    {
        question: "Which method converts JSON to object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        correct: "JSON.parse()"
    },
    {
        question: "Which symbol is used for comments in JS?",
        options: ["//", "##", "/*/", "<!--"],
        correct: "//"
    }
];
const questionEl = document.getElementById("question");
const option1 = document.getElementById("label1");
const option2 = document.getElementById("label2");
const option3 = document.getElementById("label3");
const option4 = document.getElementById("label4");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];

    questionEl.innerText = currentQuiz.question;
    option1.innerText = currentQuiz.options[0];
    option2.innerText = currentQuiz.options[1];
    option3.innerText = currentQuiz.options[2];
    option4.innerText = currentQuiz.options[3];
}

loadQuestion();

function getSelectedAnswer() {
    const options = document.getElementsByName("option");

    for (let option of options) {
        if (option.checked) {
            return option.nextElementSibling.innerText;
        }
    }
    return null;
}

nextBtn.addEventListener("click", () => {

    const selectedAnswer = getSelectedAnswer();

    if (selectedAnswer) {

        if (selectedAnswer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            questionEl.innerText = "Quiz Finished!";
            resultEl.innerText = `Your Score: ${score} / ${quizData.length}`;
            nextBtn.style.display = "none";
        }
    }
});