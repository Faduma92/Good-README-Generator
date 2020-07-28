const fs = require("fs");
const Fsfunc = require("./fsfunc");
const inquirer = require("inquirer");





const fsfunc = new Fsfunc();

const questions = [
  {
    type: "input",
    name: "badge",
    message: "Enter your badge code: ",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? ",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe the usage. ",
  },
  {
    type: "checkbox",
    message: "Choose a license: ",
    name: "license",
    choices: [
      "MIT License",
      "Apache License",
      "GPL License,",
      "Public Domain (Unlicensed)",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the rules for contributing? ",
  },
  {
    type: "input",
    name: "authors",
    message: "Who are the authors? ",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you run tests? ",
  },
 
  {
    type: "input",
    name: "questions2",
    message: "Enter GitHub username:",
  },

  {
    type: "input",
    name: "questions3",
    message: "Enter e-mail: ",
  },
  {
    type: "input",
    name: "toc",
    message: "Write a table of contents separated by commas",
  },
];
console.clear();



inquirer.prompt(questions).then((response) => {
  fsfunc.append("README.md", ("# " + response.title )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

  fsfunc.append(
    "README.md", `![Build Status](${response.badge})` + "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })

  fsfunc.append(
    "README.md", 
   "## Description" + "\n" + response.description + "\n", function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
  

  fsfunc.append(
    "README.md",
    "## Table of Contents" +
    "\n" +
    "- " +
    response.toc.split(", ").join("\n" + "- ") +
    "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })
 

  fsfunc.append(
    "README.md",
    "## Installation Istructions" + "\n" + response.installation + "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })

  fsfunc.append(
    "README.md",
    "## Usage" + "\n" + response.usage + "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })

  fsfunc.append(
    "README.md",
    "## License(s)" + "\n" + response.license + "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })

  fsfunc.append(
    "README.md",
    "## How to Contribute" + "\n" + response.contributing + "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })

  fsfunc.append(
    "README.md", 
    "## Authors " + "\n" + response.authors + "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })

  fsfunc.append(
    "README.md",
    "## How to Run Tests " + "\n" + response.tests + "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })


  fsfunc.append(
    "README.md",
    "## Questions:  "+ "\n" + `*If you have any further questions I can be contacted via e-mail or GitHub:*
    [GitHub](https://github.com/${response.questions2}) 
    ${response.questions3}` + "\n", function(err) { 

      if (err) { 
      console.log(err)
      }
      else {
      console.log("Success")
      }
  
  })

 

 console.log("You have successfully created your README.md!")
})

