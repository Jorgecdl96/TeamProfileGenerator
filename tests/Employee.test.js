const Employee = require('../lib/Employee');

const employee = new Employee('Jorge',10, 'Jorgecdl96@gmail.com');
    

test('Class employee receive Jorge as name', () => {
    
    const testName = 'Jorge';

    expect(employee.getName()).toEqual(testName); 
});

test('getRole returns "Employee"', () => {

    expect(employee.getEmail()).toEqual('Jorgecdl96@gmail.com');
});


test('getRole returns "Employee"', () => {

    expect(employee.getRole()).toEqual('Employee');
});
