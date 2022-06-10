const Intern = require('../lib/Intern');

const intern = new Intern('Mario', 12, 'Mario@gmail.com', 'Tec de Monterrey');

test('verifying methods match arguments', () => {
    
    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
    expect(intern.getSchool()).toEqual(intern.school);
});

test('getRole returns "Intern"', () => {
    
    expect(intern.getRole()).toEqual('Intern');
});