
//DETAILED PSEUDOCODE
//**IN THE SERVER.JS FILE**
​
//**TO DO**:   declare variables 
    //should include Manager, Engineer, Intern, inquirer, path, fs. 
    //resource: https://nodejs.org/api/path.html
            https://www.w3schools.com/nodejs/nodejs_filesystem.asp
​
//**TO DO**: create output directory constant using path.resolve & then create an output Path constant using path.join to join output directory and HTML page that you would like to Generate Team. 
    //path.join and path.resolve are two different methods or functions of the path module provided by node.js.  Both accept a list of paths but the difference comes in the result (how they process these paths)
    //use path.resolve (path.resolve will resolve to an absolute path.)
    //use path.join (path.join returns a normalized path by merging two paths together.  It can return an absolute path but it doesn't necessarily always do)
     //**example**: const absolutePath = path.join(_dirname, some, dir);
           const absolutePath = path.resolve(_dirname, some, dir);
        - path.join will concatenate _dirname which is the directory name of the current file concatenated with values of some and dir with platform-specific seperator. 
        - path.resolve will process _dirname, some, and dir (from right to left preprending it by processing it) 
//**NOTE**: In simplest terms:  
        When you use path.resolve() It does the following from left to right-concatenate the right most parameters with / directly with the root path to make an absolute path (check the examples) and then concatenates anything without / as a directory
    //example: 
        path.resolve('/a', 'b', 'c');     returns    C:\a\b\c
        path.resolve('/a', '/b', 'c');    returns    C:\b\c
        path.resolve('/a', '/b', '/c');   returns    C:\c
    //While using join() simply concatenates every parameter from left to right whether they have / or not
        path.join("/a", "b", "/c", "d")   simply returns   "\a\b\c\d"
​
//**TO DO** create render constant to import htmlRender.js file. 
​
//**TO DO** create empty arrays for teamMembers and idArray to instantiate these variables. 
​
//**TO DO** create function for ***createManager()*** using 
 inquirer.prompt([{
      type: "input",
      name: "managerName ",
      message: "What is EE's name?",
      validate: answer => {
          return true;
      }
      return "Please enter a valid input";
    }
},
      type: "input". 
      name: "managerId",
      message: "  "
      validate: answer => {
       const passValidateId = some logic here to validate correct ID 
      }; 
      if(passvalidateId){
          return true;
      }
      return "Incorrect input";
    }
};
//repeat these steps for managerEmail and managerOfficeNumber.
]).then(answers => {
    //create constant to create new Manager using NEW keyword.  
        //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
        //example: const constructorFunction = new ConstructorFunction(arg1, arg2)
    //use push method to push new manager into teamMembers array. 
    //use push method to push managerId into idArray.
    //call ***createTeam()***function. 
});
}
​
//**TO DO** Create a createTeam() function using 
inquirer.prompt([
     type: "list",
     name: " ",
     message: " ", 
     choices: [
​
     ]
]).then(variableForUserChoice => {
    //use switch statement to switch between scenarios
    switch(variableForUserChoice.variableForMemeberChoice){
        case "Engineer":
            addEngineer();
            break;
        //you need Engineer, Intern, & Manager.
        default: 
            buildTeam();
    }
});
}
​
//**TO DO** create addEngineer() function
        //Should look very similar to createManager() function using inquirer.prompt.
​
//**TO DO** create addIntern() function
​
//**TO DO** create buildTeam() function 
    //use fs.writeFileSync(outputPath, render(teamMembers), "utf-8";
​
//**TO DO** call createTeam() function. 
​
​
​
//**In The Employee.js File**
//**TO DO** Write Employee class to define and export Employee class. 
    //example: class Employee {
        constructor(name, id, email){
            this.name = name;
            this.id = id; 
            this.email = email; 
        };
        getName() {
            return this.name;
        };
        //do the same for getId(), getEmail(), getRole()
    };
    module.exports = Employee. 
​
//**TO DO** Write classes to define and export Engineer, Intern, Manager.  Hint: These clases should inherit from Employee. Make sure you import the Employee class.

/* BRIEF PSEUDOCODE
Write out HTML and CSS for webpage
    Jumbotron with red background, text that reads "my team".
    Cards that appear and populate with user inputted text -- page template.js??
    Emails for each member will need to be a link to email that person
    Github profile username will need to be a link to a new tab

Will need to connect index.js with team.html and style.css (fs.writeFile)

index.js
    "require" files to be used in app
        inquire
        fs
        path- LOOK UP
    function to start application
        // function init() {
        //     inquirer
        //   .prompt(questions)
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