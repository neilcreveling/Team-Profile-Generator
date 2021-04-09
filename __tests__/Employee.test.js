const Employee = require('..lib/employee');

// describe Employee
describe('Employee', () => {

    // describe init
    describe('Initialization', () => {
        // test that it returns an object that is an instance of the Employee class when called with the new keyword
        // call the constructor
        // check that it is an instance of Employee
        it('returns an object that is an instance of the Employee class when called with new keyword', () => {
            const employee = new Employee();
            expect(employee instanceof Employee).toBe(true);
        })
    

        // test that it sets name property based on constructor argument
        // define a name for the test
        // call constrouctor with the test name
        // check that the resulting name property is equal to the test name
        it("sets the name property based on constructor argument", () => {
            const name = 'Neil';
            const employee = new Employee(name)

            expect(employee.name).toBe(name);
        });    

        // test that it sets id property based on constructor argument
        // define id for test
        // call constructor with an empty string for the name arg and the test id
        // check that the resulting id property is equal to the test id
        it('sets the id property based on constructor argument', () => {
            const id = 1;
            const employee = new Employee('', id);

            expect(employee.id).toBe(id);
        });

        // test that it sets email property based on constructor argument
        // define email for test
        // call constructor with empty string for the name arg, and number for the id arg, and test email
        // check that the resulting email property is equal to the test email
        it('sets the email property based on constructor argument', () => {
            const email = 'test@gmail.com';
            const employee = new Employee('', 0, email);

            expect(employee.email).toBe(email);
        });
    });

    // describe getName
    describe('getName', () => {
        // test that it returns the name property when the getName() method is called
        // define a name for the test
        // call constructor with name of test
        // call the getName() method and check if result equals test name
        it('returns the name property when getName() method is called', () => {
            const name = "Lauren";
            const employee = new Employee(name);

            expect(employee.getName()).toBe(name);
        });
    });

    // describe getId
    describe('getId', () => {
        // test that it returns the id property when the getId() method is called
        // define an id for the test
        // call constructor with empty string for the name arg and test id
        // call the getId() method and check if result equals test id
        it('returns the id property when getId() method is called', () => {
            const id = 1;
            const employee = new Employee('', id;

            expect(employee.getId()).toBe(id);
        });
    });

    // describe getEmail
    describe('getEmail', () => {
        // test that it returns the email property when the getEmail() method is called
        // define an email for the test
        // call constructor with empty string for the name arg, id arg and test email
        // call the getEmail() method and check if result equals test email
        it('returns the id property when getEmail() method is called', () => {
            const email = 'test@gmail.com';
            const employee = new Employee('', 0, email);

            expect(employee.getEmail()).toBe(email);
        });
    });

    // describe getRole
    describe('getRole', () => {
        // test that it returns 'Employee' when the getRole() method is called
        it('returns "Employee" when the getRole() method is called', () => {
            const employee = new Employee();

            expect(employee.getRole()).toBe('Employee');
        });
    });
    
