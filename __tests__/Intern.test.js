const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('Johnny', 3, 'suhjohnny@gmail.com', 'butler university');

  expect(intern.name).toBe('Johnny');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe('suhjohnny@gmail.com');
  expect(intern.school).toBe('butler university');
})

test("gets the intern's school", () => {
  const intern = new Intern('Johnny', 3, 'suhjohnny@gmail.com', 'butler university');

  expect(intern.getSchool()).toEqual(expect.any(String));
})

// secured tests
test("get's the intern's name", () => {
  const intern = new Intern('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(intern.getName()).toEqual(expect.any(String));
})

test("get's the intern's ID number", () => {
  const intern = new Intern('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(intern.getId()).toEqual(expect.any(Number));
})

test("get the intern's email", () => {
  const intern = new Intern('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(intern.getEmail()).toEqual(expect.any(String));
})

test("get the intern's role", () => {
  const intern = new Intern('Mahogany', 1, 'marblemahogany@gmail.com', 'marblemae');

  expect(intern.getRole()).toBe('Intern');
})