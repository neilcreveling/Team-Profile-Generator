// child of Employee
// declarations
const Employee = require('./employee')

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school
    }
}

module.exports = Intern
