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


const questionsEngineer = [
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

const questionsIntern = [
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

class Questions {
    constructor(roleQuestions){
        this.roleQuestions = roleQuestions;
    }

    promptQuestions(){
        inquirer
        .prompt(this.roleQuestions)
        .then((answers) => {

            if (answers.role === 'Engineer') {
                engineer.promptQuestions();
            } else if(answers.role === 'Intern'){
                intern.promptQuestions();
            }
        })
    }
}

const manager = new Questions(questionsManager);
const engineer = new Questions(questionsEngineer);
const intern = new Questions(questionsIntern);

function init(){
manager.promptQuestions();
}

init();