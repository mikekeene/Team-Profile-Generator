const Employee = require("../lib/Employee");

test('Creates Employee object with id, name, email', () => {
    const e = new Employees();
    expect(e.id).toEqual(expect.any(Number));
    expect(e.name).toEqual(expect.any(String));
    expect(e.email).toEqual(expect.any(String));
});


    // describe("getName", () => {
    //     it("Can get name via getName()", () => {
    //         const testValue = "Ali";
    //         const e = new Employee(testValue);
    //         expect(e.getName()).toBe(testValue);
    //     });
    // });
        
    // describe("getId", () => {
    //     it("Can get id via getId()", () => {
    //         const testValue = 100;
    //         const e = new Employee("Jo", testValue);
    //         expect(e.getId()).toBe(testValue);
    //     });
    // });
        
    // describe("getEmail", () => {
    //     it("Can get email via getEmail()", () => {
    //         const testValue = "test@test.com";
    //         const e = new Employee("Jo", 1, testValue);
    //         expect(e.getEmail()).toBe(testValue);
    //     });
    // });
        
    // describe("getRole", () => {
    //     it("getRole() should return \"Employee\"", () => {
    //         const testValue = "Employee";
    //         const e = new Employee("Ali", 1, "test@test.com");
    //         expect(e.getRole()).toBe(testValue);
    //     });
    // });


