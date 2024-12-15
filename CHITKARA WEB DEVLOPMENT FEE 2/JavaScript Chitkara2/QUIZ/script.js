const questions = [
    {
        question: "1. The computer network is",
        answers: [
            { text: "A) Network computer with cable", correct: false },
            { text: "B) Network computer without cable", correct: false },
            { text: "C) Both of the above", correct: true },
            { text: "D) None of the above", correct: false }
        ]
    },
    {
        question: "2. FDDI used which type of physical topology?",
        answers: [
            { text: "A) Bus", correct: false },
            { text: "B) Ring", correct: true },
            { text: "C) Star", correct: false },
            { text: "D) Tree", correct: false }
        ]
    },
    {
        question: "3. FTP stands for",
        answers: [
            { text: "A) File transfer protocol", correct: false },
            { text: "B) File transmission protocol", correct: false },
            { text: "C) Form transfer protocol", correct: true },
            { text: "D) Form transmission protocol", correct: false }
        ]
    },
    {
        question: "4. Ethernet system uses which of the following technology.",
        answers: [
            { text: "A) Bus", correct: true },
            { text: "B) Ring", correct: false },
            { text: "C) Star", correct: false },
            { text: "D) Tree", correct: false }
        ]
    },
    {
        question: "5. Which of the following are the network services?",
        answers: [
            { text: "A) File service", correct: false },
            { text: "B) Print service", correct: false },
            { text: "C) Database service", correct: false },
            { text: "D) All of the above", correct: true }
        ]
    },
    {
        question: "6. If all devices are connected to a central hub, then topology is called",
        answers: [
            { text: "A) Bus Topology", correct: false },
            { text: "B) Ring Topology", correct: false },
            { text: "C) Star Topology", correct: true },
            { text: "D) Tree Topology", correct: false }
        ]
    },
    {
        question: "7. FDDI stands for",
        answers: [
            { text: "A) Fiber Distributed Data Interface", correct: true },
            { text: "B) Fiber Data Distributed Interface", correct: false },
            { text: "C) Fiber Dual Distributed Interface", correct: false },
            { text: "D) Fiber Distributed Data Interface", correct: false }
        ]
    },
    {
        question: "8. Which of the following is an application layer service?",
        answers: [
            { text: "A) Network virtual terminal", correct: false },
            { text: "B) File transfer, access and management", correct: false },
            { text: "C) Mail service", correct: false },
            { text: "D) All of the above", correct: true }
        ]
    },
    {
        question: "9. Which is the main function of transport layer?",
        answers: [
            { text: "A) Node to node delivery", correct: false },
            { text: "B) End to end delivery", correct: true },
            { text: "C) Synchronization", correct: false },
            { text: "d) Updating and maintaining routing tables", correct: false }
        ]
    },
    {
        question: "10. The............. layer change bits onto electromagnetic signals.",
        answers: [
            { text: "A) Physical", correct: true },
            { text: "B) Transport", correct: false },
            { text: "C) Data Link", correct: false },
            { text: "D) Presentation", correct: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

startQuiz();

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    submitButton.style.display = "none";
    if(score>6){
        resultElement.innerText = `YAY!!🎉You scored ${score} out of ${questions.length}`;
    }
    if(score<6){
        resultElement.innerHTML = `You scored ${score} out of ${questions.length}.<br>☹️You Need More Practise`;
    }
}
