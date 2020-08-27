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
        name: "tests"
    },
    {
        type: "input",
        message: "Tests",
        name: "tests"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions);
}

// function call to initialize program
init();
