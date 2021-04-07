const fs = require('fs');
const inquirer = require('inquirer');
const path = require('./output')

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managerQuestions = require('./src/manager-questions');
const engineerQuestions = require('./src/engineer-questions');
const internQuestions = require('./src/intern-questions');
generateHTML() = require('./src/page-template');


const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

let team = [];

function init() {

    function createManager() {
        inquirer.prompt(managerQuestions)
        .then((userResponse) => {
            let manager = new Manager;
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
        .then((data) => {
            let engineer = new Engineer;
            team.push(engineer);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt(internQuestions)
        .then((data) => {
            let intern = new Intern;
            team.push(intern);
            createTeam();
        });
    }

    createOutput() {
        let data = generateHTML(team);
        fs.write(outputPath, data, 'utf-8');
    }

    createManager();
}

init()

