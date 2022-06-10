const Manager = require('../lib/Manager');

const manager = new Manager('Eduardo', 1, 'Edu@mail.com', 4);

test('verifying methods match arguments', () => {
    
    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test('getRole returns "Manager"', () => {
    
    expect(manager.getRole()).toEqual('Manager');
});