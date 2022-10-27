
//Declare variables
const Employee = require("./Assets/lib/Employee");
const Engineer = require("./Assets/lib/Engineer");
const Intern = require("./Assets/lib/Intern");
const Manager = require("./Assets/lib/Manager");
const inquirer = require("inquirer");
const path = require('node:path');
const fs = require('fs');

const generateHtml = require('./Assets/src/page-template.js');

//prompted questions
//Manager questions
const questions = [
    {
      type: 'input',
      name: 'managerName',
      message: "What is your team manager's name?",
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'What is his/her employee ID?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is his/her email?',
    },
    {
      type: 'input',
      name: 'managerNumber',
      message: 'What is his/her office number?',
    },
    {
        type: 'list',
        name: 'addMember',
        message: 'Would you like to add a team member?',
        choices: ['Yes, add Engineer', 'Yes, add Intern', 'No, finish']
    },
    //add function to terminate prompts if 'no, finish' is chosen.
    //add function to jump to either engineer or intern prompts respectively 
    //Engineer questions
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is his/her name?',
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'What is his/her employee ID?',
      },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is his/her email?',
    },
    {
        type: 'input',
        name: 'engineerUsername',
        message: 'What is his/her GitHub username.',
    },
    //Intern questions
    {
      type: 'list',
      name: 'addMember',
      message: 'Would you like to add a team member?',
      choices: ['Yes, add Engineer', 'Yes, add Intern', 'No, finish']
    },
    {
        type: 'input',
        name: 'InternName',
        message: 'What is his/her name?',
    },
    {
        type: 'input',
        name: 'InternID',
        message: 'What is his/her employee ID?',
      },
    {
        type: 'input',
        name: 'InternEmail',
        message: 'What is his/her email?',
    },
    {
        type: 'input',
        name: 'InternSchool',
        message: 'What is his/her Alma Mater.',
    },
];

// function to initialize app
function init() {
    inquirer.prompt(questions) 
    
    //send answers to page-template.js file
   .then((answers) => {
    const htmlPageContent = generateHtml(answers);
    console.log("This  is my result " + htmlPageContent);
    JSON.stringify(htmlPageContent);
    // Create a function to write file
    fs.writeFile('team.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team profile!')
    ) 
   })
  };

  // Function call to initialize app
  init();