// child of Employee
// declarations
const Employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager