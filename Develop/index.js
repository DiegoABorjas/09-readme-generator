// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const { questions } = require('./utils/questions') 
const { generateMarkdown } = require('./utils/generateMarkdown')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function askQuestions() {
    inquirer.prompt(questions).then(function(answers) {
        const generatedAswers = generateMarkdown(answers)
        console.log(generatedAswers)
    })
}

function init() {
    askQuestions()
}

// Function call to initialize app
init();