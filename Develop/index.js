const fs = require("fs");
const inquirer = require("inquirer");
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "Where are you from?",
            name: "location"
        },
        {
            type: "input",
            message: "Tell me about yourself.",
            name: "bio"
        },
        {
            type: "input",
            message: "What is your linkned in url?",
            name: "linkedin"
        },
        {
            type: "input",
            message: "What is your GitHub url?",
            name: "github"
        }
    ]).then(function (answers) {
        const { name, location, bio, linkedin, github } = answers
        const markup = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1> Hello my name is ${name}! </h1>
            <h3> I am from ${location}. </h3>
            <div>
                <p> Bio: ${bio}. </p>
                <p> Linkedin: ${linkedin} </p>
                <p> GitHub: ${github} </p>
            </div>
        </body>
        </html>
        `
        fs.writeFile("index.html", markup, function (err) {
            if (err) throw err;
            console.log("Success!");
        })
    })