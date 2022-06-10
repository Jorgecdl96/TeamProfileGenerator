const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Juan', 10, 'Juan@mail.com', 'juancl');

test('verifying methods match arguments', () => {
    
    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
    expect(engineer.getGithub()).toEqual(engineer.github);
});

test('getRole returns "Engineer"', () => {
    
    expect(engineer.getRole()).toEqual('Engineer');
});