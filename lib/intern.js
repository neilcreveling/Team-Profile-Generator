// child of Employee
// declarations
const Employee = require('./employee')

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern
