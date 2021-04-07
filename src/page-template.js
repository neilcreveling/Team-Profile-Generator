const managerCard = `<div class='card'>
<div class='card-body'
    <h5 class='card-title'>${userResponse.name}</h5>
    <h6 class='card-subtitle text-muted'>Manager</h6>
    <ul class='list-group list-group-flush'>
        <li class='list-group-item>${userResponse.id}</li>
        <li class='list-group-item>${userResponse.email}</li>
        <li class='list-group-item>${userResponse.officeNumber}</li>
    </ul>
</div>
</div>`
const engineerCard = `<div class='card'>
<div class='card-body'
    <h5 class='card-title'>${userResponse.name}</h5>
    <h6 class='card-subtitle text-muted'>Engineer</h6>
    <ul class='list-group list-group-flush'>
        <li class='list-group-item>${userResponse.id}</li>
        <li class='list-group-item>${userResponse.email}</li>
        <li class='list-group-item>${userResponse.github}</li>
    </ul>
</div>
</div>`
const internCard = `<div class='card'>
<div class='card-body'
    <h5 class='card-title'>${userResponse.name}</h5>
    <h6 class='card-subtitle text-muted'>Intern</h6>
    <ul class='list-group list-group-flush'>
        <li class='list-group-item>${userResponse.id}</li>
        <li class='list-group-item>${userResponse.email}</li>
        <li class='list-group-item>${userResponse.school}</li>
    </ul>
</div>
</div>`


function createTeam(team) {

    function createManager(manager) {
        return managerCard
    }

    function createEngineer(engineer) {
        return engineerCard
    }

    function createIntern(intern) {
        return internCard
    }

    function getRole() {
        if (role === 'Manager') {
            createManager()
        } else if (role === 'Engineer') {
            createEngineer()
        } else {
            createIntern()
        }
    }

    team.map(getRole);
    team.map().join('');
    
}

const generateHTML = (team) =>
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
    </div>` + createTeam(team) + `</body></html`

module.exports = generateHTML()