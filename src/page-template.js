const fs = require('fs');

const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outpathPath = path.join(OUTPUT_DIR, 'team.html');


function generateHTML(team, OUTPUT_DIR) {
    let HTML =
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
    </div>`;

team.forEach(Employee) => {
    HTML += `<div class='card'>
<div class='card-body'
    <h5 class='card-title'>${Employee.name}</h5>
    ${getRole(Employee)}
    <ul class='list-group list-group-flush'>
        <li class='list-group-item>
            <span>ID: </span>
            <span>${Employee.id}</span>
        </li>
        <li class='list-group-item>
            <span>Email: </span>
            <span><a href="mailto:${Employee.email}">${Employee.email}</span>
        </li>
        <li class='list-group-item>
            ${getExtra(Employee)}
        </li>
    </ul>
</div>
</div>`
});

HTML += `</div>
    </body>
    </html>`

    generateMainHTML(HTML, OUTPUT_DIR);
}

function getRole(Employee) {
    switch (Employee.role) {
        case "Manager":
            return `<h6 class='card-subtitle text-muted'>${Employee.role}</h6>`
        case "Engineer":
            return `<h6 class='card-subtitle text-muted'>${Employee.role}</h6>`
        case "Intern":
            return `<h6 class='card-subtitle text-muted'>${Employee.role}</h6>`
    }
}

function getExtra(employee) {
    switch (employee, role) {
        case 'Manager':
            return `<span>Office Number: </span><span>${employee.officeNumber}</span>`;
        case 'Engineer':
            return `<span>Github: </span><span><a href="https://github.com/${employee.github}">github.com/${employee.github}</a></span>`;
        case 'Intern':
            return `<span>School: </span><span>${employee.school}</span>`;
    }
}

function generateMainHTML(html, filePath) {
    const dir = path.join(filePath, 'dist');
    fs.mkdir(dir, { recursive: true }, (err) => {
        err ? console.error(err) : process.chdir(dir);
        fs.writeFileSync('team.html', html);
    });
}



module.exports.generateHTML = generateHTML;
