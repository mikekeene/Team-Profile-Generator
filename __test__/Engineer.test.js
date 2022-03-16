const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const e = new Engineer('Mike', 1, 'mikey@gmail.com', '123mike123');
  expect(e.github).toBe('123mike123');
});

test("getRole() should return \"Engineer\"", () => {
  const e = new Engineer('Mike', 1, 'mikey@gmail.com', "GitHubUser");
  expect(e.getRole()).toEqual('Engineer');
});

test("Can get GitHub username via getGithub()", () => {
  const e = new Engineer('Mike', 67, 'mikey@gmail.com', '123mike123');
  expect(e.getGithub()).toEqual('123mike123');
});

