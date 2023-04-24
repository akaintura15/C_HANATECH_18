const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);//event listner to only click start button once
const resultsContainer = document.getElementById('results');
function startQuiz() {
  // add your code to start the quiz here

  // disable the start button after it is clicked
  startButton.disabled = true;


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
},

{
  question: "Which actions can you perform using the SAP HANA platform lifecycle management web user interface?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Stop and start the SAP HANA database system.",
    b: "Update the SAP HANA database system.",
    c: "Manage the full system information dumps.",
    d: "Configure the system landscape directory registration."
  },
  correctAnswers: ["b","d"]
},
{
  question: "Why does SAP HANA have a persistence storage layer that is disk-based?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "To persist in-memory data",
    b: "To generate indexes for the column store ",
    c: "To enable data recovery if the power fails",
    d: "To allow row store operations"
  },
  correctAnswers: ["a","c"]
},
{
  question: "What must you do to convert an SAP HANA 1.0 single database system to an SAP HANA 2.0 multitenant database system?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Upgrade the SAP HANA database system ",
    b: "Export/import application and customer data",
    c: "Execute the SUM database migration option with system move",
    d: "Create the system database manually"
  },
  correctAnswers: ["a"]
},
{
  question: "Which tool do you use to backup the root encryption keys?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "hdbnsutil",
    b: "hdbuserstore",
    c: "dbacockpit",
    d: "rsecssfx"
  },
  correctAnswers: ["a"]
},
{
  question: "You upgrade an SAP HANA 1.0 system to SAP HANA 2.0. Which of the following activities are required to avoid compatibility issues after the upgrade?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Export the backup jobs history from SAP HANA 1.0 and import the history after the upgrade",
    b: "Delete all Backup schedules with the SAP HANA cockpit ",
    c: "Create new backup schedules after the upgrade",
    d: "Convert all SAP HANA 1.0 backup schedules to SAP HANA 2.0 backup schedules"
  },
  correctAnswers: ["c","d"]
},
{
  question: "How can you use the results from a comparable the run to optimize the database migration option (DMO) procedure downtime for a production system?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Use the MIGRATE_SOT_DUR.XML file to manually optimize table splitting of large tables",
    b: "Use the UPGANA.XML analysis file to optimize the number of R3load processes.",
    c: "Use the Test Cycle option to determine the optimal number of R3load processes.",
    d: "Use the MIGRATE_DT_DUR.XML file to optimize table splitting and migration sequence"
  },
  correctAnswers: ["c","d"]
},
{
  question: "When you use the database migration option reset procedure as a fallback scenario, which of the changes made during the migration are NOT reset?",
  note:"choose 3 correct answers to this question.",
    answers: {
    a: "The SAP ABAP kernel on the application server ",
    b: "The shadow schema on the non-SAP database",
    c: "The deleted SAP BusinessObjects Business Intelligence data on the non-SAP database",
    d: "The DBACOCKPIT user on the SAP HANA database ",
    e: "The updated BRTOOLS on the non-SAP database"
  },
  correctAnswers: ["c","d","e"]
},
{
  question: "What software innovations did SAP deliver with SAP HANA?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Row and Delta store.",
    b: "Insert only on the Column store.",
    c: "Partitioning.",
    d: "Compression and Decompression."
  },
  correctAnswers: ["b","c"]
},
{
  question: "In which cases can you load and unload individual tables and table columns manually in an SAP HANA tenant database?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "To actively free up memory",
    b: "To optimize the standby node memory ",
    c: "To extend the scale-out memory",
    d: "To measure total table memory"
  },
  correctAnswers: ["a","d"]
},
{
  question: "Which backup scenarios are allowed in multitenant database containers?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "A backup of a tenant database can be recovered to an SAP HANA single- container system",
    b: "A tenant database can initiate its own backup unless this is prohibited by the system configuration",
    c: "The system database can initiate its own backup and the backup of tenant databases",
    d: "The system database should be recovered first in order to recover the tenant databases"
  },
  correctAnswers: ["b","d"]
},
{
  question: "Which feature do you configure to prevent the whole SAP HANA database system from reaching physical processing limits?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Admission control",
    b: "Performance trace",
    c: "Capture and replay ",
    d: "Workload classes"
  },
  correctAnswers: ["a"]
},

{
  question: "Which of the following statements are true about SAP HANA Live?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "SAP HANA Live for SAP Business Suite focuses on Enterprise Data Warehouse cases, and not on live operational reporting.",
    b: "SAP HANA Live for SAP Business Suite is a Rapid Deployment Solution",
    c: "SAP HANA Live for SAP Business Suite comprises an Analytical Model.",
    d: "SAP HANA Live for SAP Business Suite comes with a comprehensive set of predefined models from across the SAP Business Suite",
    e: "SAP HANA Live for SAP Business Suite is an accelerator."
},
  correctAnswers: ["c","d"]
},
{
  question: "You migrate an SAP HANA system using the SUM database migration option. Which activities do you perform to activate the viewer mode for SAP support?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Provide the SUM URL to SAP support",
    b: "Provide the sum observer URL to SAP support",
    c: "Create the database user obs on the application server ",
    d: "Create the OS user obs on the application server"
   
},
  correctAnswers: ["b","d"]
},
{
  question: "What is XS?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "A native, lightweight application server",
    b: "An optional engine to handle excessive data loads ",
    c: "A data cleansing engine",
    d: "A user interface"
   
},
  correctAnswers: ["a"]
},
{
  question: "Which action do you perform when the data area in an SAP HANA database is running out of space?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Extend the file system size in the operating system level ",
    b: "Extend the size of the database volume ",
    c: "Create a new tenant database ",
    d: "Create a new database volume"
   
},
  correctAnswers: ["d"]
},
{
  question: "Which user credentials do you need to stop the SAP HANA database system using the SAP HANA cockpit?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "sap<sid>",
    b: "<sid>adm",
    c: "Root",
    d: "Cockpit User ",
    e: "Database user"
   
},
  correctAnswers: ["d","a","e"]
},
{
  question: "How are user group administrators and user groups related?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Multiple user group administrators per user group ",
    b: "Only one user group per user group administrator ",
    c: "Only one user group administrator per user group",
    d: "Multiple user groups per user group administrator"
   
},
  correctAnswers: ["a","d"]
},
{
  question: "You are planning an SAP S/4HANA scale-out system. What are the minimal size requirements for CPU and memory?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "RAM: >= 6TB, CPU: >=12  ",
    b: "RAM: >= 4TB, CPU: >= 8",
    c: "RAM: >= 6TB, CPU: >= 8",
    d: "RAM: >= 8TB, CPU: >=12"
   
},
  correctAnswers: ["c",]
},
{
  question: "Which tools do you use to delete diagnosis files?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "SAP HANA cleaner",
    b: "SAP HANA Web-based Development Workbench ",
    c: "SAP HANA database explorer",
    d: "SAP HANA cockpit"
   
},
  correctAnswers: ["a","b"]
},
{
  question: "Which types of backups can you use to copy an SAP HANA tenant database?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Data snapshot ",
    b: "Fallback snapshot",
    c: "Full database backup ",
    d: "Delta database backup"
   
},
  correctAnswers: ["a","c"]
},
{
  question: "Which prerequisites of the primary system and the secondary system are mandatory before you can activate the SAP HANA system replication with secondary time travel?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Both systems are located in the same data center.",
    b: "An explicit read-only connect on between both systems must be available.",
    c: "The CPU architecture must be identical.",
    d: "Both must have the same SAP HANA version."
   
},
  correctAnswers: ["c","d"]
}

];

function buildQuiz() {
  const output = [];
  let questionCounter = 1; // initialize counter variable

  // Shuffle the questions array
  const shuffledQuestions = shuffleArray(myQuestions);

  // Take the first two questions to display
  const questionsToDisplay = shuffledQuestions.slice(0, 20);

  questionsToDisplay.forEach((currentQuestion, questionNumber) => {
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.slice(0, 20).forEach((currentQuestion, questionNumber) => {
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

  const percentage = Math.round((numCorrect /  myQuestions.length) * 100);
  resultsContainer.innerHTML = `You answered ${numCorrect} out of 2 questions correctly (${percentage}%).`;

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
