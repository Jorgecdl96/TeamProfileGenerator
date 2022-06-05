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
        name: 'school'
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
            
            htmlCreation(answers);
            
        })
        
    }
}

const manager = new Questions(questionsManager);
const engineer = new Questions(questionsEngineer);
const intern = new Questions(questionsIntern);

 

function htmlCreation(answers){

const {managerName, managerEmail, managerID, managerOffice, role, engineerName, engineerEmail, engineerID, github, internName, internEmail, internID, school} = answers;

if(managerName){
    const managerContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        <header class="d-flex align-items-center justify-content-center" style="height: 5rem; background-color: rgb(240, 72, 21); color: white;;">
            <h1>My Team</h1>
        </header>
    <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div class="card m-2" style="width: 18rem;" >
            <div class="card-body">
                <h4 class="card-title">${managerName}</h4>
                <h5>Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerID}</li>
                <li class="list-group-item nav-item">Email: <a href="mailto:${managerEmail}" >${managerEmail}</a></li>
                <li class="list-group-item">Office number: ${managerOffice}</li>
              </ul> 
        </div>
    `

    fs.writeFile('index2.html',managerContent, (err) => {
        if(err){
            console.log(err)}
    })
}

if(engineerName){
    const engineerContent = `<div class="card m-2" style="width: 18rem;" >
    <div class="card-body">
        <h4 class="card-title">${engineerName}</h4>
        <h5>Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineerID}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineerEmail}" >${engineerEmail}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
      </ul> 
    </div>
`

fs.appendFile('index2.html', engineerContent, (err) => {
    if(err){
        console.log(err);
    }
})

}

if(internName){
    const internContent = `<div class="card m-2" style="width: 18rem;" >
    <div class="card-body">
        <h4 class="card-title">${internName}</h4>
        <h5>Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${internID}</li>
        <li class="list-group-item">Email: <a href="mailto:${internEmail}">${internEmail}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul> 
    </div>
`

fs.appendFile('index2.html', internContent, (err) => {
    if(err){
        console.log(err);
    }
})

}

switch (role) {
        case 'Engineer':
            engineer.promptQuestions();
            break;
        case 'Intern':
            intern.promptQuestions();
            break;
        default:
        const finalContent = `</div>
    </body>
    </html>`  

    setInterval(() => {
        fs.appendFile('index2.html',finalContent, (err) =>{
        if (err) {
            console.log(err);
        }
        })
        
    }, 2000);
            break;
        }
         
}


function init(){
    manager.promptQuestions();
}

init();