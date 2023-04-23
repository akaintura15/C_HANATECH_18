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


///////////////////////////////////  questions start from here////////////////////////////
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
      d: "The failed worker host has access to write files",
    },
    correctAnswers: ["c","b"]
  }  ,
  {
    question: "Where is the name server running in a multitenant database container system ? ",
    note:"choose 1 correct answers to this question.",
    answers: {
      a: "Master node  ",
      b: "SYSTEMDB",
      c: "Each tenant ",
      d: "Standby node"
    },
    correctAnswers: ["b"]
  },

{
    question: "Which system usage types are automatically assigned to tiles in the SAP HANA cockpit? ",
    note:"There are 3 correct answers to this question.",
    answers: {
      a: "Test ",
      b: "Custom",
      c: "Production ",
      d: "Quality assurance ",
      e: "Development"
    },
    correctAnswers: ["a","c","e"]
  },

{
    question: "Which SAP HANA database service can you stop from the system database? ",
    note:"There are 2 correct answers to this question.",
    answers: {
      a: "Index server ",
      b: " Preprocessor ",
      c: "Compile server ",
      d: "XS Engine "
 
    },
    correctAnswers: ["b","c"]
  },
  {
    question: "Once you start the SAP HANA cockpit 2.0, From the Aggregated Health Monitor, navigate to the SAP HANA system overview pag This page displays the detailed status of the selected SAP HANA system Which of the following options are listed? ",
    note:"choose 2 correct answers to this question.",
    answers: {
      a: "Performance Management ",
      b: "Memory Management",
      c: "Security",
      d: "Resource Management",
      e: "Monitoring and Administration"
    },
    correctAnswers: ["c","e"]
  },
{
    question: "Which preparation tasks do you need to perform before starting the Database Migration Option (DMO) procedure?",
    note:"choose 2 correct answers to this question.",
    answers: {
      a: "Move the latest R3trans update archive into the download folder. ",
      b: "Check if the latest SPAM/SAINT update is applied.",
      c: "Extract the SAP HANA database software installation archive.",
      d: "Update the SAP Host Agent to the latest version"
    },
    correctAnswers: ["b","d"]
  },
{
    question: "Which service is located in a tenant database?",
    note:"choose 1 correct answers to this question.",
    answers: {
      a: "SAP Web Dispatcher ",
      b: "Index server",
      c: "Name server ",
      d: "Compile server"
    },
    correctAnswers: ["b"]
  },
{
    question: "Which user management tasks can be performed by a Lightweight Directory Access Protocol (LDAP) server?",
    note:"There are 2 correct answers to this question.",
    answers: {
      a: "User mapping",
      b: "Password policy configuration",
      c: "User creation",
      d: "Role assignment"
    },
    correctAnswers: ["c","d"]
  },
  
{
  question: "Your customer has purchased a 1.5 TB SAP HANA license. To which value do you set the GLOBAL_ALLOCATION_LIMIT parameter when you have four 1TB nodes in an SAP HANA scale-out system with three worker and one standby nodes?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "1.0 TB",
    b: "1.5 TB",
    c: "375 GB",
    d: "512 GB"
  },
  correctAnswers: ["d"]
},
{
  question: "Which parameters are mandatory when using the hdblcm tool in batch mode?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Installation path ",
    b: "Data and Log path",
    c: "SAP HANA System ID (SID)",
    d: "Password of the user sapadm"
  },
  correctAnswers: ["c","d"]
},
{
  question: "Which tool shows you information about the list of tables to be pre-loaded during an SAP HANA system start?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "sap control ",
    b: "RecoverStateChecker.py",
    c: "HDBAdmin",
    d: "hdbcons"
  },
  correctAnswers: ["d"]
},
{
  question: "Which technology is utilized by the Performance Warehouse option in the transaction DBACOCKPIT?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "SAP Analytics Cloud",
    b: "SAP Business Intelligence ",
    c: "SAP Data Warehouse Cloud",
    d: "SAP Intelligent Query (SAP IQ)"
  },
  correctAnswers: ["b"]
},
{
  question: "What is a characteristic of the Delta Data Shipping operation mode in SAP HANA system replication?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "It takes place in addition to continuous log shipping.",
    b: "It takes place with continuous read-only access to the secondary system. ",
    c: "It takes place every 5 minutes.",
    d: "It takes place in addition to continuous log replay."
  },
  correctAnswers: ["a"]
},
{
  question: "Your customer has purchased a 3.0 TB SAP HANA license. To which value do you set the GLOBAL_ALLOCATION_LIMIT parameter when you have four 2.0 TB nodes in an SAP HANA scale-out system consisting of three worker nodes and one standby node?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "3.0 TB",
    b: "2.0 TB ",
    c: "1.0 TB",
    d: "4.0 TB"
  },
  correctAnswers: ["b"]
},
{
  question: "Which file systems are supported for the data and log volumes of the SAP HANA 2.0 database system?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "XFS",
    b: "GPFS",
    c: "OCFS2",
    d: "Btrfs"
  },
  correctAnswers: ["a","b"]
},
{
  question: "What can you check with the SAP HANA Hardware Configuration Check Tool (HWCCT)?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Network configuration ",
    b: "Memory configuration ",
    c: "Kernel settings",
    d: "Missing OS patches"
  },
  correctAnswers: ["b","c"]
},
{
  question: "You are running a database migration option (DMO) procedure using in-place migration. Where are the reading and writing R3load processes located during the actual migration?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "The reading processes run on the primary application server (PAS) host; the writing processes run on the target database host.",
    b: "The reading processes run on the source database host; the writing processes run on the target database host.",
    c: "All of the reading and writing processes run on the target database host.",
    d: "All of the reading and writing processes run on the primary application server (PAS) host."
  },
  correctAnswers: ["d"]
},
{
  question: "You need to analyze the high CPU load of running thread in more detail in the Thread Monitor. Which parameters do you need to change?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "threshold_cpu_time",
    b: "load_monitor_granularity",
    c: "cpu_time_measurement_mode ",
    d: "enable_tracking"
  },
  correctAnswers: ["b"]
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
