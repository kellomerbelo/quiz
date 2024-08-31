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

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    const output = quizData.map((currentQuestion, questionNumber) => {
        const answers = Object.keys(currentQuestion)
            .filter(key => key !== 'question' && key !== 'correct')
            .map(letter => 
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion[letter]}
                </label>`
            ).join('');
        return `<div class="question">${currentQuestion.question}</div><div class="answers">${answers}</div>`;
    }).join('');
    quizContainer.innerHTML = output;
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainer.style.color = 'green';
        } else {
            answerContainer.style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
