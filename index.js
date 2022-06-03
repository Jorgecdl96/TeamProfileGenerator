const inquirer = require('inquirer');
const fs = require('fs');

const questionsManager = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'What is the manager\'s employee ID?',
        name: 'managerID'
    },
    {
        type: 'input',
        message: 'What is the manager\'s email address?',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'managerOffice'
    },
    {
        type: 'list',
        message: 'Do you want to add a new member?',
        choices: ['Engineer', 'Intern','finish building my team'],
        name: 'role'
    }
];


const questionEngineer = [
    {
         
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s employee ID?',
        name: 'engineerID'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email address?',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub?',
        name: 'github'
    },
    {
        type: 'list',
        message: 'Do you want to add a new member?',
        choices: ['Engineer', 'Intern','finish building my team'],
        name: 'role'
    }
    
];

const questionIntern = [
    {
         
        type: 'input',
        message: 'What is the intern\'s name?',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'What is the intern\'s employee ID?',
        name: 'internID'
    },
    {
        type: 'input',
        message: 'What is the intern\'s email address?',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'What is the intern\'s School?',
        name: 'github'
    },
    {
        type: 'list',
        message: 'Do you want to add a new member?',
        choices: ['Engineer', 'Intern','finish building my team'],
        name: 'role'
    }
    
];

function init(){
inquirer
  .prompt(questionsManager)
  .then((answers) => {

      if (answers.role === 'Engineer') {
          promptEngineer();
      } else if(answers.role === 'Intern'){
          promptIntern();
      }
      
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function promptEngineer(){
    inquirer
  .prompt(questionEngineer)
  .then((answers) => {

    if (answers.role === 'Engineer') {
        promptEngineer();
    } else if(answers.role === 'Intern'){
        promptIntern();
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function promptIntern(){
    inquirer
  .prompt(questionIntern)
  .then((answers) => {

   if (answers.role === 'Engineer') {
          promptEngineer();
      } else if(answers.role === 'Intern'){
          promptIntern();
      }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}


init();