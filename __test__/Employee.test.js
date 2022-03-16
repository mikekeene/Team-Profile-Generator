const Employee = require("../lib/Employee");

test('Creates Employee object with id, name, email', () => {
    const e = new Employee('Mike', 67, 'mike@gmail.com');
    expect(e.name).toEqual(expect.any(String));
    expect(e.email).toEqual(expect.any(String));
    expect(e.id).toEqual(expect.any(Number));
});

test('Can get name via getName()', () => {
    const e = new Employee('Mike');
    expect(e.getName()).toEqual('Mike');
});

test('can get id via getID()', () => {
    const e = new Employee('Mike', 67, 'mikey@gmail.com');
    expect(e.getId()).toEqual(67);
});

test('can get email via getEmail()', () => {
    const e = new Employee('Mike', 67, 'mikey@gmail.com');
    expect(e.getEmail()).toEqual('mikey@gmail.com');
});

test('can get employee via getRole()', () => {
    const e = new Employee('Mike', 67, 'mikey@gmail.com');
    expect(e.getRole()).toEqual('Employee');
});
