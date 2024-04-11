// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'title',
    message: 'Please type your project title'
  },

  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license',
    choices: ['No License', 'MIT', 'ISC', {
      name:'IBM',
      value: 'IPL-1.0'
    }],
    default: ['No License']
  }, 

  {
    name: 'description',
    message: 'Please provide a short description explaining the what, why, and how of your project.'
  }, 

  {
    name: 'installation',
    message: 'Please provide the steps required to install your project?'
  },

  {
    name: 'usage',
    message: 'Please provide instructions and examples for use.'
  }, 

  {
    name: 'credits',
    message: 'Please list any collaborators if any.'
  },

  {
    name: 'features',
    message: 'List your project features:'
  },

  {
    name: 'tests',
    message: 'Write tests completed for your application with examples and how to run them here.'
  },

  {
    name: 'github',
    message: 'Please enter your GitHub Username:'
  },

  {
    name: 'email',
    message: 'Please enter your email address:'
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err)
    }

    console.log('Readme generated successfully!')
  })
}

// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions)
    .then((answersObj) => {
      const markdown = generateMarkdown(answersObj)

      writeToFile('README.md', markdown)
    })
    .catch((err) => {
      console.log(err)
    })


}

// Function call to initialize app
init();

// const license = 'MIT'

// console.log(license.replaceAll(' ', '_'))