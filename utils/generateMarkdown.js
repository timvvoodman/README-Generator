// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
![License: ${data.license}]
## Description
${data.description}
## Table of Contents
[Description](#Description)  
* [Installation](#Installation)  
* [Usage](#Usage)  
* [Contributing](#Contributing)  
* [Tests](#Tests)  
* [Questions](#Questions)  
* [License](#License)
## Instalation
${data.instalation} 
## Usage
${data.usage} 
# Contributing
${data.contributing}
## Test
${data.test}
## Questions
Please direct all questions regarding this project to ${data.email}, Thank You!
## License 
This application is covered under a ${data.license} license.
[${data.username}](https://github.com/${data.user})
`;
};

module.exports = { generateMarkdown };
