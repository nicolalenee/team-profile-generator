const Manager = require("../lib/Manager");

test ('creates a manager object', () => {
  const manager = new Manager('Rhandi', 1, 'marblerhandi@gmail.com', 6);

  expect(manager.name).toBe('Rhandi');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe('marblerhandi@gmail.com');
  expect(manager.officeNumber).toEqual(expect.any(Number));
})

test ("gets the manager's office number", () => {
  const manager = new Manager('Rhandi', 1, 'marblerhandi@gmail.com', 6)

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})
