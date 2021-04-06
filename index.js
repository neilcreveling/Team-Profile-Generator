const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let manager = new Manager
let engineer = new Engineer
let intern = new Intern



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employeen ID.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email address.',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter office number.',
        },
        {
            type: 'list',
            name: 'menu',
            choices: ['Engineer', 'Intern', 'Finish building team'],
            message: 'Would you like to add an engineer or intern? If not, please choose to finish your team.',
        }
    ])
}

const generateHTML = (userResponse) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class='container'>
        <div class='jumbotron>
            <h1>My Team</h1>
        </div>
    </div>
    <div class='card'>
        <div class='card-body'
            <h5 class='card-title'>${userResponse.name}</h5>
            <h6 class='card-subtitle text-muted'>${role}</h6>
            <ul class='list-group list-group-flush'>
                <li class='list-group-item>${userResponse.id}</li>
                <li class='list-group-item>${userResponse.email}</li>
                <li class='list-group-item>${userResponse.officeNumber}</li>
            </ul>
        </div>
    </div>
</body>`

promptUser()
const filename = SampleHTML

fs.writeFile(filename, generateHTML(data), (err) =>
err ? console.log(err) : console.log('Success!')
