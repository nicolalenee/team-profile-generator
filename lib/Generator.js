const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function Generator() {
  this.manager;
  this.engineers = [];
  this.interns = [];


  // const employeeData = {
  //   manager = this.manager,
  //   engineers = this.engineers,
  //   interns = this.interns
  // }
};

Generator.prototype.initializeGenerator = function() {
  inquirer
    .prompt([
      {
      type: 'input',
      name: 'managerName',
      message: "What is your name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'managerId',
      message: 'What is your employee ID?',
      validate: idInput => {
        if (idInput) {
          return true;
        }
        console.log('Please enter a valid ID number!')
        return false;
    }
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'What is your email addresss?',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter an email address!')
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: 'What is your current office Number?',
    validate: officeInput => {
      if (officeInput) {
        return true;
      }
      console.log('Please enter an office number!')
      return false;
    }
  } 
  ])
    .then(({ managerName, managerId, managerEmail, officeNumber }) => {
      this.manager = new Manager(managerName, managerId, managerEmail, officeNumber);
      
      this.startEmployeePrompt();
    })
};

Generator.prototype.startEmployeePrompt = function() {
  inquirer
    .prompt({
        type: 'list',
        name: 'employeeSelection',
        message: 'What type of employee are you entering?',
        choices: ['Engineer', 'Intern']
      })
      .then(({ employeeSelection }) => {

        if (employeeSelection === 'Engineer') {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'engineerName',
                message: "What's their name?",
                validate: engineerNameInput => {
                  if (engineerNameInput) {
                    return true;
                  } else {
                    console.log("Please enter the engineer's name!")
                    return false;
                  }
                }
              },
              {
                type: 'number',
                name: 'engineerId',
                message: "What's their ID number?",
                validate: engineerIdInput => {
                  if (engineerIdInput) {
                    return true;
                  } else {
                    console.log("Please enter the engineer's employee ID!");
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'engineerEmail',
                message: "What's their email address?",
                validate: engineerEmailInput => {
                  if (engineerEmailInput) {
                    return true;
                  } else {
                    console.log("Please enter the engineer's email address!");
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'engineerGithub',
                message: "What's their github username?",
                validate: engineerGithubInput => {
                  if (engineerGithubInput) {
                    return true;
                  } else {
                    console.log("Please enter the engineer's github username")
                    return false;
                  }
                }
              },
              {
                type: 'confirm',
                name: 'addNew',
                message: 'Would you like to add another employee?',
                default: false
              }
            ])
            .then(({ engineerName, engineerId, engineerEmail, engineerGithub, addNew }) => {
              // push into engineers array
              this.engineers.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));

              // if user decides to add another employee
              if (addNew) {
                this.startEmployeePrompt();
              } else {
                console.log('Team Profile generated! Check it out!');
                this.logArrays();
              }
            })
        } else {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'internName',
                message: "What's their name?",
                validate: internNameInput => {
                  if (internNameInput) {
                    return true;
                  } else {
                    console.log("Please enter the intern's name!");
                    return false;
                  }
                }
              },
              {
                type: 'number',
                name: 'internId',
                message: "What's their ID number?",
                validate: internIdInput => {
                  if (internIdInput) {
                    return true;
                  } else {
                    console.log("Please enter the intern's employee ID!");
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'internEmail',
                message: "What's their email address?",
                validate: internEmailInput => {
                  if (internEmailInput) {
                    return true;
                  } else {
                    console.log("Please enter the intern's email address")
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'internSchool',
                message: "What's the name of their school?",
                validate: internSchoolInput => {
                  if (internSchoolInput) {
                    return true;
                  } else {
                    console.log("Please enter the school name!")
                    return false;
                  }
                }
              },
              {
                type: 'confirm',
                name: 'addNew',
                message: 'Would you like to add another employee?',
                default: false
              }
            ])
            .then(({ internName, internId, internEmail, internSchool, addNew }) => {
              // push into interns array
              this.interns.push(new Intern(internName, internId, internEmail, internSchool));

              // if user decides to add another employee
              if (addNew) {
                this.startEmployeePrompt();
              } else {
                console.log('Team Profile generated! Check it out!');
                this.logArrays();
              }
            })
        }

      })
      
}

Generator.prototype.logArrays = function() {
  console.log(this.manager)
  console.log(this.engineers)
  console.log(this.interns)
}


module.exports = Generator;