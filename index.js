const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managerQuestions = require('./src/manager-questions.js');
const engineerQuestions = require('./src/engineer-questions.js');
const internQuestions = require('./src/intern-questions.js');
const pageTemplate = require('./src/page-template.js');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

let team = [];

function init() {

    function createManager() {
        inquirer.prompt(managerQuestions)
        .then((man) => {
            let manager = new Manager(
                man.manName,
                man.manId,
                man.manEmail,
                man.manOfficeNumber
            )
            team.push(manager);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt(
            {
                type: 'list',
                name: 'createTeam',
                choices: ['engineer', 'intern', 'finish'],
                message: 'Would you like to add an engineer or intern? If not, please choose to finish your team.',
            }
        )
        .then((userResponse) => {
            if (userResponse === 'engineer') {
                addEngineer();
            } else if (userResponse === 'intern') {
                addIntern();
            } else {
                createOutput();
            }

            }
        )};

    function addEngineer() {
        inquirer.prompt(engineerQuestions)
        .then((eng) => {
            let engineer = new Engineer(
                eng.engName,
                eng.engId,
                eng.engEmail,
                eng.Git
            );
            team.push(engineer);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt(internQuestions)
        .then((int) => {
            let intern = new Intern(
                int.intName,
                int.intId,
                int.intEmail,
                int.intSchool
            );
            team.push(intern);
            createTeam();
        });
    }

    function createOutput() {
        let data = pageTemplate;
        fs.write(outputPath, data, 'utf-8');
    }

    createManager();
}

init()

