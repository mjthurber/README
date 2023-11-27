const { prompt } = require('inquirer');
const fs = require('fs');
// Q: what does the code below do?
// A: it imports the LicenseBadge function from the generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');

async function generateReadme() {
  const responses = await prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title for your project:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address for questions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    }


  ]);

  const readmeContent = `
# ${responses.title}

## Description
${responses.description}

${generateMarkdown(responses)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
${responses.installation}

## Usage
${responses.usage}

## Contributing
${responses.contributing}

## License
${responses.license}

## Questions
${responses.email}
${responses.github}

`;

  // Write the content to a README file
  fs.writeFileSync('README.md', readmeContent);
  console.log('README.md file generated successfully!');
}

generateReadme();
