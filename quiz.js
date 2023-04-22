const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

const myQuestions = [
  {
    question: "Which services are used between the SAP HANA cockpit and its managed resources  ? ",
    note:"There are 2 correct answers to this question.",
    answers: {
      a: "Smart Data Streaming ",
      b: "System Landscape Directory",
      c: "sapstartsrv",
      d: "Diagnostics Agent"
    },
    correctAnswers: ["c","d"]
  },

{ 
    question: "You install a productive multi-host system with failover capabilities. Which storage condition prerequisites must be ensured ?   ",
    note:"There are 3 correct answers to this question.",
    
    answers: {
      a: "The standby host has NO file access ",
      b: "The failed worker host no longer has access to write to files ",
      c: "The standby host has file access",
      
},
correctAnswers: ["c"]
  }
  
];

function buildQuiz() {
  const output = [];
  let questionCounter = 1; // initialize counter variable

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="checkbox" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    const note = currentQuestion.note ? `<small>${currentQuestion.note}</small><br>` : '';
    output.push(
      `<div class="question"> ${questionCounter}. ${currentQuestion.question} ${note} </div>
      <div class="answers"> ${answers.join('')} </div>
      <br>`
    );

    questionCounter++; // increment counter variable for next question
  });

  quizContainer.innerHTML = output.join('');
}





function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswers = Array.from(answerContainer.querySelectorAll(selector)).map((checkbox) => checkbox.value);

    if (arraysEqual(userAnswers, currentQuestion.correctAnswers)) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  const percentage = Math.round((numCorrect / myQuestions.length) * 100);
  resultsContainer.innerHTML = `You answered ${numCorrect} out of ${myQuestions.length} questions correctly (${percentage}%).`;
}


function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

buildQuiz();

submitButton.addEventListener('click', showResults);