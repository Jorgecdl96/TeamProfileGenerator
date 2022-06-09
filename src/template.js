const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

    const generateManager = (answers) =>{
        const {name, id, email, officeNumber} = answers;
        const manager = new Manager(name, id, email, officeNumber);
        return `<div class="card m-2" style="width: 18rem;" >
        <div class="card-body">
            <h4 class="card-title">${manager.getName()}</h4>
            <h5>${manager.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item nav-item">Email: <a href="mailto:${manager.getEmail()}" >${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul> 
        </div>
        `
    
    }
    
    const generateEngineer = (answers) => {
        const {name, id, email, github} = answers;
        const engineer = new Engineer(name, id, email, github);
        return `<div class="card m-2" style="width: 18rem;" >
        <div class="card-body">
            <h4 class="card-title">${engineer.getName()}</h4>
            <h5>${engineer.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" >${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
          </ul> 
        </div>
        `
        
    }
    
    const generateIntern = (answers) =>{
        const {name, id, email, school} = answers;
        const intern = new Intern(name, id, email, school);
    
        return`<div class="card m-2" style="width: 18rem;" >
        <div class="card-body">
            <h4 class="card-title">${intern.getName()}</h4>
            <h5>${intern.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul> 
        </div>
        `
    
    }




module.exports = {
    generateManager,
    generateEngineer,
    generateIntern
};