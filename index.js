const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generate");

const questions = [
  {
    name: "shape",
    type: "list",
    message: "What shape would you like the logo to be?",
    choices: ["Circle", "Square", "Triangle"],
  },

  {
    name: "background_color",
    type: "input",
    message: "What color would you like the logo background to be?",
  },
  {
    name: "text",
    type: "input",
    message: "What would you like the logo text to be?",
  },
  {
    name: "text_color",
    type: "input",
    message: "What color would you like the logo text to be?",
  },
];

function writeToFile(fileName, data) {
  var answers = generateLogo(data);
  fs.writeFile(fileName, answers, (error) => {
    if (err) return console.log(err);
    else {
      return console.log("Logo generated successfully");
    }
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = "logo.svg";
    writeToFile(fileName, data);
  });
}

init();
