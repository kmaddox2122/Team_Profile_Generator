/* PSEUDOCODE
Write out HTML and CSS for webpage
    Jumbotron with red background, text that reads "my team".
    Cards that appear and populate with user inputted text -- page template.js??
    Emails for each member will need to be a link to email that person
    Github profile username will need to be a link to a new tab

Will need to connect index.js with team.html and style.css

index.js
    "require" files to be used in app
    function to start application
    prompts to enter team manager's name, emp ID, email, and office number
        // If the user does not enter anything, return an error message
            if (!userInput) {
            console.error('');
            process.exit();
            }   --- ref lesson 10.8
    Then goes to a menu to prompt to add a team member
        Has options for:
            Engineer
                name, emp ID, email, Github username
            Intern
                name, emp ID, email, school
            Finish building team
                HTML is generated

(reference 10.1 for properties definition and 10.2 for methods definition. Subclasses in 10.23)

Employee.js
    parent class
    properties : name, id, email
    methods : getName, getID, getEmail, getRole --returns Employee

Manager.js
    Subclass of Employee
    additional property: officeNumber
    methods : getRole -- returns Manager

Engineer.js
    Subclass of Employee
    additional property: github username
    methods : getGithub, getRole -- returns Engineer

Intern.js
    Subclass of Employee
    additional property: school
    methods : getSchool, getRole -- returns Intern

add validation to ensure user input is in correct format



Testing
    Create 4 testing files - one for each team member
    "require" corresponding js file from "lib"
    
*/

const Employee = require("./Assets/lib/Employee");
const Engineer = require("./Assets/lib/Engineer");
const Intern = require("./Assets/lib/Intern");
const Manager = require("./Assets/lib/Manager");

