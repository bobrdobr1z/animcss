
const questions = [
    {
        question: "Сколько игр в серии The Legend of Zelda было выпущено на декабрь 2020 года?",
        options: ["15", "20", "19", "23"],
        correctAnswer: 1,
        image: "images/z.jpg"
    },
    {
        question: "Сколько концовок в игре Detroit: Become Human?",
        options: ["4", "6", "5", "7"],
        correctAnswer: 2,
        image: "images/d.jpg"
    },
    {
        question: "Сколько персонажей можно выбрать в игре Street Fighter V на момент релиза (включая DLC)?",
        options: ["10", "16", "5", "7"],
        correctAnswer: 1,
        image: "images/s.jpg"
    },
    {
        question: "Сколько уровней в Super Mario Bros.?",
        options: ["32", "28", "19", "10"],
        correctAnswer: 2,
        image: "images/m.jpg"
    },
    {
        question: "Сколько основных классов в игре Diablo III?",
        options: ["7", "5", "9", "8"],
        correctAnswer: 1,
        image: "images/di.jpg"
    },
    {
        question: "Какой персонаж является главным героем игры Final Fantasy VII?",
        options: ["Cloud Strife", "Tidus", "Squall Leonhart", "fimer" ],
        correctAnswer: 0,
        image: "images/f.jpg"
    },
    {
        question: "Какой год стал годом выхода первой игры в серии Halo?",
        options: ["2001", "2003", "2005", "2006"],
        correctAnswer: 0,
        image: "images/h.jpg"
    },
    {
        question: "Какой жанр игры The Last of Us?",
        options: ["Приключенческая игра", "Шутер", "Ролевые игры", "выживание" ],
        correctAnswer: 0,
        image: "images/t.jpg"
    },
    {
        question: "Какой игровой персонаж известен своей фразой 'It's-a me, Mario!'?",
        options: ["Luigi", "Mario", "Peach", "marin" ],
        correctAnswer: 1,
        image: "images/mar.jpg"
    },
    {
        question: "Какой из этих персонажей является антагонистом в игре Batman: Arkham Asylum?",
        options: ["Джокер", "Пингвин", "Риддлер", "паркер"],
        correctAnswer: 0,
        image: "images/bat.jpg"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    const questionText = document.getElementById('question-text');
    const optionButtons = document.querySelectorAll('.option-button');
    const questionImage = document.getElementById('question-image');

    questionText.innerText = questions[currentQuestion].question;
    questionImage.src = questions[currentQuestion].image;
    questionImage.style.display = "block";

    optionButtons.forEach((button, index) => {
        button.innerText = questions[currentQuestion].options[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        startQuiz();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const questionText = document.getElementById('question-text');
    const nextButton = document.getElementById('next-button');
    const results = document.getElementById('results');

    questionText.style.display = "none";
    nextButton.style.display = "none";
    results.style.display = "block";
    results.innerText = `Вы ответили правильно на ${score} из ${questions.length} вопросов.`;
}

const nextButton = document.getElementById('next-button');
nextButton.addEventListener("click", startQuiz);

startQuiz();
