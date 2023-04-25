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
},
{
  question: "Which SAP platform technology is used for on premise SAP Landscape Management?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "SAP NetWeaver Application Server for Java ",
    b: "SAP HANA XS advanced runtime",
    c: "SAP Business Technology Platform",
    d: "SAP NetWeaver Application Server for ASAP"
   
},
  correctAnswers: ["d"]
},
{
  question: "Which actions take place during a database migration option (DMO) procedure when performing an in-place migration?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "TABART is used for the creation of R31oad control files",
    b: "SAPup decides which tables to split.",
    c: "Big tables are split using R3ta.",
    d: "Tables are de-pooled."
   
},
  correctAnswers: ["b","d"]
},
{
  question: "One of your systems shows the internal Disk Full (Alert 30) alert. What is the root cause of this alert?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Running out of free space on the /hana/shared volume ",
    b: "Exceeding system quota on the /usr/sap volume",
    c: "Reading from the /hana/log/<sid> volume is NOT possible ",
    d: "Writing to the /hana/data/<sid> volume is NOT possible"
   
},
  correctAnswers: ["a"]
},
{
  question: "Which rules should you consider when creating a table distribution plan for SAP Business Suite powered by SAP HANA to get the best possible results?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Keep the number of key column low.",
    b: "Keep the number of partitioned tables low.",
    c: "Keep the number of partitions per table high.",
    d: "Keep all partitions on different hosts."
   
},
  correctAnswers: ["a","c"]
},
{
  question: "Your SAP HANA database is locked down. Which action can you still perform?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Configure system properties ",
    b: "Check session memory",
    c: "Check overall database status ",
    d: "Check database license"
   
},
  correctAnswers: ["d"]
},
{
  question: "Which products do you use for SAP HANA administration?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "SAP Web IDE for SAP HANA",
    b: "SAP HANA cockpit",
    c: "SAP Master Data Governance ",
    d: "SAP Solution Manager"
   
},
  correctAnswers: ["b","d"]
},
{
  question: "Which file systems are supported for the SAP HANA database system?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Dxfs",
    b: "EXT3",
    c: "MPFS",
    d: "GPFS"
   
},
  correctAnswers: ["b","d"]
},
{
  question: "Which operating system process takes care of starting the SAP HANA database system services?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "sapstartsrv",
    b: "hdbrsutil",
    c: "hdbdaemon",
    d: "sapstart"
   
},
  correctAnswers: ["d"]
},
{
  question: "Which preparation tasks do you need to perform before starting the copy and move process for a tenant database?",
  note:"choose 3 correct answers to this question.",
    answers: {
    a: "Create credentials for authenticated access to the source system.",
    b: "Create a tenant on the target system identical to the source system",
    c: "Create credentials for authenticated access to the target system.",
    d: "Back up the source tenant database.",
    e: "Configure a secure connection from target system to source system"
   
},
  correctAnswers: ["a","d","e"]
},
{
  question: "What cryptographic libraries are supported in SAP HANA by default?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "OpenSSL",
    b: "Common Cryptolib ",
    c: "Libgcrypt",
    d: "WolfCrypt",
    e: "Configure a secure connection from target system to source system"
   
},
  correctAnswers: ["a","b"]
},
{
  question: "What is one of the backup options provided by the SAP HANA database?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Single table backup ",
    b: "Data snapshots",
    c: "Fallback snapshots ",
    d: "Time travel", 
   
},
  correctAnswers: ["b"]
},
{
  question: "Which kinds of patches are available in the SAP HANA 2.0 revision strategy?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Feature Package Stack ",
    b: "Support Package",
    c: "Support Package Stack ",
    d: "Datacenter Service Point", 
   
},
  correctAnswers: ["b","c"]
},
{
  question: "What is the purpose of the SAP HANA secure user store (hdb user store)?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "To configure an SAP HANA auto-restart for faut recovery ",
    b: "To configure failover support in a 3-tier scenario",
    c: "To store connection information on the SAP HANA database client",
    d: "To store connection information on the SAP HANA XS advanced engine", 
   
},
  correctAnswers: ["b","c"]
},
{
  question: "Why are repository roles preferred over catalog roles?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "They are revoked if the database user that granted them is deleted.",
    b: "They are transportable runtime objects.",
    c: "They are transportable design-time objects.",
    d: "They are created by the technical user.", 
   
},
  correctAnswers: ["b","d"]
},
{
 
  question: "Which table provides a customizing interface that can be used for the dynamic management of partitions and locations?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "TABLE_PLACEMENT ",
    b: "TABLE_GROUP",
    c: "UPDATE_LANDSCAPE_CONFIGURATION",
    d: "EFFECTIVE_TABLE_PLACEMENT"
   
},
  correctAnswers: ["a"]
},
{
  
  question: "Reloading column tables in this way restores the database to a fully operational state more quickly. However, it does create performance overhead, and may not be necessary in nonproductive systems, how can you deactivate the reload feature?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Edit the indexserver.xml file by setting the reload_tables parameter in the sql section to false",
    b: "Edit the indexserver.ini file by setting the reload tables parameter in the sql section to false",
    c: "Edit the indexserver.ini file by setting the reload tables parameter in the sql section to true",
    d: "Edit the indexserver.xml file by setting the reload tables parameter in the sql section to false"
   
},
  correctAnswers: ["b"]
},
{
  
  question: "Which components of SAP HANA Indexserver allow clients to connect and communicate with the SAP HANA database?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Relational Engines ",
    b: "External Interfaces",
    c: "Storage Engine and Disk Storage",
    d: "Request Processing and Execution Control"
   
},
  correctAnswers: ["b"]
},
{
  
  question: "Which compression algorithm is supported for SAP HANA system replication?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "LZ4 ",
    b: "BZIP2",
    c: "GZIP",
    d: "LZ77"
   
},
  correctAnswers: ["a"]
},
{
  
  question: "You want to perform the database migration option (DMO) procedure. Which components have to be updated if they are not on the right version level?",
  note:"choose 3 correct answers to this question.",
    answers: {
    a: "Database client software ",
    b: "SPAM/SAINT",
    c: "ASAP Kernel",
    d: "ST-Pl",
    e: "SAP Host Agent"
   
},
  correctAnswers: ["a","b","e"]
},
{
  
  question: "Which tasks must you perform to convert a single database to a multitenant database system?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "Generate the system database before the conversion.",
    b: "Set the password for the system database user.",
    c: "Create an operating system user for the converted tenant database.",
    d: "Trigger the conversion in the SAP HANA cockpit 2.0.",
    e: "SAP Host Agent"
   
},
  correctAnswers: ["b","d"]
},
{
  
  question: "SQL statements are rejected by the Workload Admission Control application, and you need to investigate the reason. Which parameters do you adjust to manage the event log?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "record_limit ",
    b: "queue_timeout",
    c: "queue_wait_time_threshold ",
    d: "max_queue_size"
   
   
},
  correctAnswers: ["a","c"]
},
{
  question: "Which backup and recovery scenario is allowed in multitenant database containers?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "The system database should be recovered first in order to recover the tenant databases.",
    b: "A backup of a tenant database can be recovered to the system database.",
    c: "After the recovery of a tenant database, the system database needs a backup.",
    d: "A tenant database can initiate its own backup, but the system database executes the recovery."
   
   
},
  correctAnswers: ["d"]
},
{
  
  question: "What is the minimum space requirement for the Data Volume?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Min. 1 * RAM.",
    b: "3 * RAM (Appliance) ",
    c: "Min. 0.5 * RAM",
    d: "1.2 * RAM (TDI)"   
   
},
  correctAnswers: ["b","d"]
},
{
  
  question: "You want to implement a 28-day backup cycle. Which scenario uses the least storage?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Full backup, differential backup, log backup ",
    b: "Full backup, incremental backup, log backup",
    c: "Full backup, log backup",
    d: "Incremental backup, log backup)"
   
},
  correctAnswers: ["b"]
},
{
  
  question: "Which diagnostic file can you use to monitor the status of database recovery?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "backint.log",
    b: "backup.log",
    c: "sapstartsrv.log",
    d: "available.log"
   
   
},
  correctAnswers: ["b"]
},
{
  
  question: "A logical error occurred in one tenant of your SAP HANA database. What action do you perform to make the tenant consistent again?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Recover the system database. The affected tenant is recovered automatically.",
    b: "Recover the affected tenant. The system database is NOT recovered.",
    c: "Recover the affected tenant first and then recover the system database. ",
    d: "Recover the system database first and then recover the affected tenant."
   
   
},
  correctAnswers: ["b"]
},
{
  
  question: "Which actions are performed during the database migration option (DMO) procedure when you select the 'Do not compare table contents' option?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "A check sum is generated every 10000 rows. ",
    b: "The clustered tables are declustered.",
    c: "The content comparison is performed for repository tables.",
    d: "A row count is executed for the migrated tables."
     
},
  correctAnswers: ["a","b"]
},
{
  
  question: "Which of the following recovery types is not supported for delta backups?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Recover the database to its most recent state. ",
    b: "Recover the database to a specific data backup.",
    c: "Recover the database to a specific point in time."
   
},
  correctAnswers: ["b"]
},
{
  
  question: "Which target database does the SUM databases migration option provide by default?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "SAP IQ ",
    b: "SAP ASE ",
    c: "SAP HANA",
    d: "SAp MaxDB."
   
   
},
  correctAnswers: ["a","b"]
},
{
  
  question: "In which situations can you resume the failed recovery of your productive SAP HANA tenant database?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "An aborted recovery of a delta data backup",
    b: "An aborted recovery of a log backup",
    c: "An aborted recovery of a complete data backup ",
    d: "An aborted recovery of the configuration files"
   
   
},
  correctAnswers: ["a","b"]
},
{
  
  question: "How can you perform a complete back up of an SAP HANA database system?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Back up the complete database system.",
    b: "Back up the system database and all tenant databases individually.",
    c: "Back up the system database and all tenant databases in one step. ",
    d: "Backup the complete storage system."
   
   
},
  correctAnswers: ["b"]
},
{
  
  question: "For an SAP HANA tailored data center integration (TDI) approach, what is the additional disk space factor required during delta merge operations?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "1.2",
    b: "3.0",
    c: "1.6",
    d: "2.0"
   
},
  correctAnswers: ["a"]
},
{
  
  question: "What is the correct minimum requirement for log volume and/hana/shared/file system for an SAP HANA database system?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "For 2 TB system, Log volume = 1 TB,/hana/shared/ = 1TB",
    b: "For 512 GB system, Log volume = 512 GB,/hana/shared/ = 256 GB ",
    c: "For 256 GB system, Log volume = 128 GB,/hana/shared/ = 256 GB",
    d: "For 1 TB system, Log volume = 1 TB,/hana/shared/ = 1TB"
   
   
},
  correctAnswers: ["c"]
},
{
  
  question: "Which technology is used to install the SAP Landscape Management tool?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "SAP NetWeaver Application Server for ABAP ",
    b: "SAP NetWeaver Application Server for Java",
    c: "SAP Fiori launchpad",
    d: "SAP HANA XS advanced runtime"
   
   
},
  correctAnswers: ["b"]
},
{
  
  question: "How can you minimize the database migration option (DMO) downtime?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Run the benchmarking tool parallel to the DMO to automatically adjust the number of R3load processes",
    b: "Adjust the number of R3load processes during benchmarking and the DMO procedure",
    c: "Provide the measured table migration duration for table sequencing during benchmarking",
    d: "Use the benchmarking tool for a productive database migration with the DMO procedure"
   
   
},
  correctAnswers: ["b"]
},
{
  
  question: "What is the first node limit for planning an SAP S/4HANA scale-out system?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: ">= 12CPU",
    b: ">= 8TB ",
    c: ">= 8CPU",
    d: ">= 6TB"
   
},
  correctAnswers: ["c","d"]
},
{
  
  question: "What are prerequisites for changing the SSFS Master Keys?",
  note:"choose 2 correct answers to this question.",
    answers: {
    a: "You have the server root privilege INIFILE ADMIN ",
    b: "You have the credentials of the SYSTEM user",
    c: "You have the system privilege I IN I FILE ADMIN",
    d: "You have the credentials of the Operating system user adm that was created when the system was installed"
   
},
  correctAnswers: ["c","d"]
},
{
  
  question: "What can a user do when the backup operator system privileges is assigned?",
  note:"choose 1 correct answers to this question.",
    answers: {
    a: "Schedule backups",
    b: "Perform data recovery",
    c: "Configure backup settings",
    d: "Delete backups"
   
},
  correctAnswers: ["a"]
},


];

function buildQuiz() {
  const output = [];
  let questionCounter = 1; // initialize counter variable

  // Shuffle the questions array
  const shuffledQuestions = shuffleArray(myQuestions);

  // Take the first two questions to display
  const questionsToDisplay = shuffledQuestions.slice(0, 40);//////////////////////////////////////////////////////////make changes here in number 20

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

  myQuestions.slice(0, 40).forEach((currentQuestion, questionNumber) => {////////////////////////////////////////////make changes in this 20
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
  resultsContainer.innerHTML = `You answered ${numCorrect} out of 40 questions correctly (${percentage}%).`;///////////////////what is this 2 for??

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
