// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return

  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case 'None':
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `This project has no license.`
  } else
  return `This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (`
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ---

  ## Table of Contents

  * [Installation](#installation)
  
  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ---

  ## Installation

  To install necessary dependencies, run the following command:
  \`\`\`\md
  ${data.dependencies}
  \`\`\`\

  ---

  ## Usage
  ${data.usage}

  ---

  ## License
  ${renderLicenseSection(data.license)}

  ---

  ## Contributing
  ${data.contribute}

  ---

  ## Tests
  To run tests, run the following command:
  \`\`\`\md
  ${data.tests}
  \`\`\`\

  ---

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more
  of my work at [${data.username}](https://github.com/${data.username})

`)
}

module.exports = {
  generateMarkdown
}
