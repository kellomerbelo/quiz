const allQuestions = [
    // Add your 100 questions here, each formatted like the objects in quizData
    // Example:
    { question: "What is the capital of France?", a: "Berlin", b: "Madrid", c: "Paris", d: "Lisbon", correct: "c" },
    // Add more questions until you have 100
];

// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to get a subset of questions
function getRandomQuestions(pool, numQuestions) {
    shuffle(pool);
    return pool.slice(0, numQuestions);
}

let quizData = getRandomQuestions(allQuestions, 10); // Get 10 random questions

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('start');
const retryButton = document.getElementById('retry');

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
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
    retryButton.style.display = 'inline-block';
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizData = getRandomQuestions(allQuestions, 10); // Get a new set of 10 questions
    quizContainer.style.display = 'block';
    resultsContainer.innerHTML = '';
    startButton.style.display = 'none';
    retryButton.style.display = 'none';
    buildQuiz();
}

// Event Listeners
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', showResults);
startButton.addEventListener('click', startQuiz);
retryButton.addEventListener('click', startQuiz);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    startButton.style.display = 'inline-block';
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'none';
});
