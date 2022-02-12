const Manager = require("../lib/Manager");

test ('creates a manager object', () => {
  const manager = new Manager('Rhandi', 1, 'marblerhandi@gmail.com', 6);

  expect(manager.name).toBe('Rhandi');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe('marblerhandi@gmail.com');
  expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("gets the manager's office number", () => {
  const manager = new Manager('Rhandi', 1, 'marblerhandi@gmail.com', 6);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})


// secured tests
test("get's the manager's name", () => {
  const manager = new Manager('Rhandi', 1, 'marblerhandi@gmail.com', 6);

  expect(manager.getName()).toEqual(expect.any(String));
})

test("get's the manager's ID number", () => {
  const manager = new Manager('Rhandi', 1, 'marblerhandi@gmail.com', 6);

  expect(manager.getId()).toEqual(expect.any(Number));
})

test("get the manager's email", () => {
  const manager = new Manager('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(manager.getEmail()).toEqual(expect.any(String));
})

test("get the manager's role", () => {
  const manager = new Manager('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(manager.getRole()).toBe('Manager');
})