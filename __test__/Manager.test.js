const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Jo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const e = new Manager("Jo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe("Manager");
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Jo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

