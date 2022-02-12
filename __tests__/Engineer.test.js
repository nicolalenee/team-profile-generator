const Engineer = require('../lib/Engineer');

test ('creates an Engineer object', () => {
  const engineer = new Engineer('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae')
  
  expect(engineer.name).toBe('Mahogany');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe('marblemahogany@gmail.com');
  expect(engineer.github).toBe('marblemae');
})

test("gets the engineer's github username", () => {
  const engineer = new Engineer('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(engineer.getGithub()).toEqual(expect.any(String));
})

// secured tests
test("get's the engineer's name", () => {
  const engineer = new Engineer('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(engineer.getName()).toEqual(expect.any(String));
})

test("get's the engineer's ID number", () => {
  const engineer = new Engineer('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(engineer.getId()).toEqual(expect.any(Number));
})

test("get the engineer's email", () => {
  const engineer = new Engineer('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(engineer.getEmail()).toEqual(expect.any(String));
})

test("get the engineer's role", () => {
  const engineer = new Engineer('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(engineer.getRole()).toBe('Engineer');
})