const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);//event listner to only click start button once
const resultsContainer = document.getElementById('results');
function startQuiz() {
  // add your code to start the quiz here

  // disable the start button after it is clicked
  startButton.disabled = true;

  // set the end time for the quiz (3 hours from now)
  const endTime = new Date();
  endTime.setTime(endTime.getTime() + 3 * 60 * 60 * 1000);

  // start the timer to update the remaining time
  const timerElement = document.getElementById('timer');
  const timerInterval = setInterval(() => {
    const remainingTime = endTime.getTime() - new Date().getTime();
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      showResults();
    } else {
      const hours = Math.floor(remainingTime / (60 * 60 * 1000));
      const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
      timerElement.innerHTML = `Time remaining: ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);

  // add event listener to submit button to stop the timer
  submitButton.addEventListener('click', () => {
    clearInterval(timerInterval);
  });
}

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
      `<div class="question"> ${questionCounter}. ${currentQuestion.question} <br> ${note} </div>
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

    // Get the correct answers for the current question
    const correctAnswers = currentQuestion.correctAnswers;

    // Loop through all the answer options for the current question and highlight them appropriately
    for (const letter in currentQuestion.answers) {
      const option = answerContainer.querySelector(`input[value="${letter}"]`).parentNode;

      // If the option is checked and is a correct answer, highlight it as green
      if (userAnswers.includes(letter) && correctAnswers.includes(letter)) {
        option.style.color = 'lightgreen';
      }
      // If the option is checked and is not a correct answer, highlight it as red
      else if (userAnswers.includes(letter) && !correctAnswers.includes(letter)) {
        option.style.color = 'red';
      }
      // If the option is not checked and is a correct answer, highlight it as green but with strikethrough
      else if (!userAnswers.includes(letter) && correctAnswers.includes(letter)) {
        option.style.color = 'lightgreen';
        
      }
    }

    // If the user answered the current question correctly, increment the numCorrect variable
    if (arraysEqual(userAnswers, correctAnswers)) {
      numCorrect++;
    }
  });

  const percentage = Math.round((numCorrect / myQuestions.length) * 100);
  resultsContainer.innerHTML = `You answered ${numCorrect} out of ${myQuestions.length} questions correctly (${percentage}%).`;

  // disable all input elements on the page to prevent further changes to the quiz
  const inputElements = document.getElementsByTagName('input');
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].disabled = true;
  }

  // disable the submit button to prevent multiple clicks
  submitButton.disabled = true;
}




function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

startButton.addEventListener('click', function() {
  buildQuiz();
  submitButton.addEventListener('click', showResults);
  
});
