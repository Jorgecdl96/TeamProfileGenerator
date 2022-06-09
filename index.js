const inquirer = require('inquirer');
const fs = require('fs');
const {generateManager,generateIntern,generateEngineer, generateHTML} = require('./src/template')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questionsManager = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the manager\'s employee ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the manager\'s email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber'
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
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s employee ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email address?',
        name: 'email'
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
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the intern\'s employee ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the intern\'s email address?',
        name: 'email'
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


                const print = `<!DOCTYPE html>
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
                    fs.writeFile('index2.html', print, (err) => console.log(err));
                    break;
            }
            
        })
        
    }
}



const manager = new Questions(questionsManager);
const engineer = new Questions(questionsEngineer);
const intern = new Questions(questionsIntern);



function htmlCreation(answers){

//const {managerName, managerEmail, managerID, managerOffice, role, engineerName, engineerEmail, engineerID, github, internName, internEmail, internID, school} = answers;
// const {officeNumber, github, school, role} = answers;
// if(officeNumber){
//     generateHTML(answers);
    // const managerContent = `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    //     <title>Document</title>
    // </head>
    // <body>
    //     <header class="d-flex align-items-center justify-content-center" style="height: 5rem; background-color: rgb(240, 72, 21); color: white;;">
    //         <h1>My Team</h1>
    //     </header>
    // <div class="d-flex flex-wrap align-items-center justify-content-center">
    //     <div class="card m-2" style="width: 18rem;" >
    //         <div class="card-body">
    //             <h4 class="card-title">${name}</h4>
    //             <h5>Manager</h5>
    //         </div>
    //         <ul class="list-group list-group-flush">
    //             <li class="list-group-item">ID: ${id}</li>
    //             <li class="list-group-item nav-item">Email: <a href="mailto:${email}" >${email}</a></li>
    //             <li class="list-group-item">Office number: ${officeNumber}</li>
    //           </ul> 
    //     </div>
    // `

    // fs.writeFile('index2.html',managerContent, (err) => {
    //     if(err){
    //         console.log(err)}
    // })
// }else if(github){
//     generateHTML(answers);
//     const engineerContent = `<div class="card m-2" style="width: 18rem;" >
//     <div class="card-body">
//         <h4 class="card-title">${name}</h4>
//         <h5>Engineer</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${id}</li>
//         <li class="list-group-item">Email: <a href="mailto:${email}" >${email}</a></li>
//         <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
//       </ul> 
//     </div>
// `

// fs.appendFile('index2.html', engineerContent, (err) => {
//     if(err){
//         console.log(err);
//     }
// })

// }else if(school){
//     generateHTML(answers);
//     const internContent = `<div class="card m-2" style="width: 18rem;" >
//     <div class="card-body">
//         <h4 class="card-title">${name}</h4>
//         <h5>Intern</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${id}</li>
//         <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//         <li class="list-group-item">School: ${school}</li>
//       </ul> 
//     </div>
// `

// fs.appendFile('index2.html', internContent, (err) => {
//     if(err){
//         console.log(err);
//     }
// })

// }

switch (answers.role) {
        case 'Engineer':
            engineer.promptQuestions();
            break;
        case 'Intern':
            intern.promptQuestions();
            break;
        default:
    //     const finalContent = `</div>
    // </body>
    // </html>`  

    //setTimeout(() => {
        // fs.appendFile('index2.html',generateHTML(), (err) =>{
        // if (err) {
        //     console.log(err);
        // }
        // })
        
    // }, 2000);
            break;
        }
         
        fs.writeFile('index2.html', generateHTML(answers), (err) => console.log(err));
}


function init(){
    manager.promptQuestions();
}

init();
