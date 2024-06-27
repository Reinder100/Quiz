const quizData = [
    {
        question: "Na sua opinião, o bullying é muito prático hoje em dia nas escolas?",
        a: "Sim, muito, e todos os dias alguém sofre.",
        b: "Talvez, não sei.",
        c: "Não",
        correct: "a",
    },
    {
        question: "O bullying pode ter quais consequências nas vítimas que sofrem?",
        a: "Não teria nada nenhum dano, é apenas frescura da pessoa.",
        b: "Ele pode ter consequências fatais na vida da vítima, como depressão e até mesmo suicido.",
        c: "A pessoa seguira a vida normalmente sem traumas.",
        correct: "b",
    },
    {
        question: "O que leva o autor do bullying a prática-lo?",
        a: "Geralmente as pessoas que praticam esse tipo de coisas são pessoas que não tem a devida atenção em casa, então procura se sentir poderoso e obter uma 'Boa imagem' para seus colegas fazendo chacota dos demais.",
        b: "As pessoas que praticam esse tipo de coisa quer se sentir mais agradável, sentir-se um humorista e construir um relacionamento amigável com todos a sua volta.",
        c: "A maioria das pessoas que praticam esse tipo de ato, apenas querem ser amigas de todos.",
        correct: "a",
    },
    {
        question: "Como agir com os alunos envolvidos em um caso de bullying?",
        a: "Nada, se não é comigo não tem o por que me meter.",
        b: "A escola deve repudiar a atuação da agressão, humilhar o praticante e puni-lo com medidas relacionadas ao mal causado.",
        c: "O foco deve se voltar a recuperação da saúde mental do aluno, avisando sua família e vendo o melhor jeito para não expôr o aluno.",
        correct: "c",
    },
    {
        question: "Como lidar com o bullying contra os alunos com deficiência?",
        a: "Conversar abertamente sobre as diversas deficiências é uma ação que deve ser corintiana nas escolas.",
        b: "Deve-se ignorar a existência das deficiências, pois somos todos iguais perante as normas sociais.",
        c: "A melhor forma de lidar com o bullying contra alunos com deficiência é ignorar o problema, pois isso fará com que os agressores eventualmente parem.",
        correct: "a",
    },
    {
        question: "Você sabe o que é Capacitismo?",
        a: "O capacitismo é o preconceito contra as pessoas com deficiência, em que se julga que elas não são capazes ou são inferiores.",
        b: "É a superação que os cadeirantes conseguem alcançar.",
        c: "É a capacidade de uma pessoa de se comunicar e interagir com outras pessoas.",
        correct: "a",
    },
    {
        question: "Quais atitudes tomar para auxiliar pessoas com deficiência?",
        a: "Ignorar.",
        b: "Oferecer ajuda e esperar o tempo dela.",
        c: "Zombar e fazer chacotas com seus colegas.",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('enviar');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }

       currentQuiz++;

       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>Você respondeu corretamente ${score}/${quizData.length} perguntas </h2>
           <button onclick="location.reload()">Reiniciar</button>
           `;
       }
    }
});

