// child of Employee
// declarations
const Employee = require('./employee')

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }
}

module.exports = Engineer
