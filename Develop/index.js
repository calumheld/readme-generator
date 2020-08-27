const fs = require("fs");
const inquirer = require("inquirer");
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contributing:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "what is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(function(answers){
    console.log("this works");
    const{title,description,installation,usage,contributing,tests,github,email}=answers;
    console.log(title);
    const markup=
    `# ${title}
# Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Description 
${description}

## Installation  
${installation}

## Usage 
${usage}

## Contributing
${contributing}

## Tests 
${tests}

## Questions
    github: https://github.com/${github}
    email: ${email}
    `
    fs.writeFile("README.md", markup, function (err) {
        if (err) throw err;
        console.log("Success!");
    })
})
}

// function call to initialize program
init();
