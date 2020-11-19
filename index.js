const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    },
  },

  {
    type: "input",
    message:
      "What is your prefered email for questions regarding this project?",
    name: "email",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Email is required. Please try agian.");
      }
      return true;
    },
  },

  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },

  {
    type: "input",
    message: "Write a description of your project:",
    name: "description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    },
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

  {
    type: "input",
    message: "Provide info on how to test to see if your project works:",
    name: "test",
  },

  {
    type: "list",
    message: "Choose a license for your this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your README.md file has been created successfully");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile("testREADME", markdown);
  });
}

// function call to initialize program
init();
