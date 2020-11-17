const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a breif description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions for your project:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use:",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide guidelines for project contrbution:",
    name: "contribute",
  },
];

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    fs.writeFile("log.txt", JSON.stringify(response), {}, (e) =>
      console.log(e)
    );
  });
}

// function call to initialize program
init();
