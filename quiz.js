const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b",
    },
    {
        question: "What is the most used programming language in 2023?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const currentQuestion = quizData[index];
    const answers = Object.keys(currentQuestion)
        .filter(key => key !== 'question' && key !== 'correct')
        .map(letter => 
            `<label>
                <input type="radio" name="answer" value="${letter}">
                ${letter} : ${currentQuestion[letter]}
            </label>`
        ).join('');
    quizContainer.innerHTML = `<div class="question">${currentQuestion.question}</div><div class="answers">${answers}</div>`;
    
    // Show the Next button if not on the last question, otherwise show Submit button
    if (index < quizData.length - 1) {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    } else {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
}

function showNextQuestion() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const answerContainer = answerContainers[0];
    const selector = 'input[name=answer]:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // Check the answer
    if (userAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
    }
}

function showResults() {
    showNextQuestion();  // Check the answer for the last question
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

buildQuiz();

nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', showResults);
