// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license == 'No License') {
  return ''
 } else {
  return `![GitHub license](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'No License') {
    return ''
  } else {
    return `(https://opensource.org/licenses/${license})`
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License 
  ${renderLicenseBadge(license)}

  This project is licensed under ${license}
  For more information on license please click the [Link]${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Features
  ${data.features}

  ## How to Contribute
  Feel free to contribute to the project. If you would like more information please check out the [Contributor Covenant](https://www.contributor-covenant.org/).

  ## Tests
  ${data.tests}

  ## Questions
  For more check out my [GitHub](https://github.com/${data.github}) 
  
  If you have any questions feel free to reach me at ${data.email}.👋
 
`;
}

module.exports = generateMarkdown;