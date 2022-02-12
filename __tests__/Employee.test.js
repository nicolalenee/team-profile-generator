const Employee = require('../lib/Employee.js');

test('creates new employee object', () => {
  const employee = new Employee('Nicola', 1, 'marblenicola@gmail.com');

  expect(employee.name).toBe('Nicola');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('marblenicola@gmail.com');
})

test("get's the employee's name", () => {
  const employee = new Employee('Nicola', 1, 'marblenicola@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
})

test("get's the employee's ID number", () => {
  const employee = new Employee('Nicola', 1, 'marblenicola@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
})

test("get the Employee's email", () => {
  const employee = new Employee('Nicola', 1, 'marblenicola@gmail.com')
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
})

test("get the Employee's role", () => {
  const employee = new Employee('Nicola', 1, 'marblenicola@gmail.com')

  expect(employee.getRole()).toBe('Employee');
})