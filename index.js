const inquirer = require('inquirer');
const fs = require('fs');
const {generateManager,generateIntern,generateEngineer} = require('./src/template');

const questionsManager = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the manager\'s employee ID?',
        name: 'id',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the manager\'s email address?',
        name: 'email',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
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
        name: 'name',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the engineer\'s employee ID?',
        name: 'id',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email address?',
        name: 'email',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub?',
        name: 'github',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
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
        name: 'name',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the intern\'s employee ID?',
        name: 'id',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the intern\'s email address?',
        name: 'email',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the intern\'s School?',
        name: 'school',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nplease submit an answer')
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Do you want to add a new member?',
        choices: ['Engineer', 'Intern','finish building my team'],
        name: 'role'
    }
    
];

let cardManager = '';
let cardEngineer = '';
let cardIntern = '';

class Questions {
    constructor(roleQuestions){
        this.roleQuestions = roleQuestions;
    }
    
    promptQuestions(){
        inquirer
        .prompt(this.roleQuestions)
        .then((answers) => {
            
            const {officeNumber, github, school, role} = answers;
            if(officeNumber){
            cardManager = generateManager(answers);
            }else if(github){
            cardEngineer += generateEngineer(answers);
            }else if(school){
             cardIntern += generateIntern(answers);
            }


        const printHtml = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header class="d-flex align-items-center justify-content-center" style="height: 5rem; background-color: rgb(240, 72, 21); color: white;;">
                <h1>My Team</h1>
            </header>
            <div class="d-flex flex-wrap align-items-center justify-content-center">
            ${cardManager}
            ${cardEngineer}
            ${cardIntern}
            </div>
        </body>
        </html>`
                

            switch (role) {
                case 'Engineer':
                    engineer.promptQuestions();
                    break;
                case 'Intern':
                    intern.promptQuestions();
                    break;
                default:
                    fs.writeFile('./dist/index.html', printHtml, (err) => {
                        if(err){
                            console.log(err)
                        }
                    });
                    break;
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
