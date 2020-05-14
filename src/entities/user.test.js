const { makeUser } = require("./");

const { generateFakeUser } = require("../../__tests__/data-faker");

describe("User data validation", () => {

    it("Should have firstName", () => {
        const userInfo = generateFakeUser({ firstName: null});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have valid firstName", () => {
        const userInfo = generateFakeUser({ firstName: "N0tV4lid"});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have lastName", () => {
        const userInfo = generateFakeUser({ lastName: null});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have valid lastName", () => {
        const userInfo = generateFakeUser({ lastName: "N0tV4lid"});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have an email", () => {
        const userInfo = generateFakeUser({ email: null});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have a valid email", () => {
        const userInfo = generateFakeUser({ email: "myemail.com"});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have a password", () => {
        const userInfo = generateFakeUser({ password: null});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have at least medium strength password", () => {
        const userInfo = generateFakeUser({ password: "cat123"});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should make a user when all data is valid", () => {
        const userInfo = generateFakeUser();
        const user = makeUser(userInfo);

        expect(user.getFirstName()).toBe(userInfo.firstName);
        expect(user.getLastName()).toBe(userInfo.lastName);
        expect(user.getEmail()).toBe(userInfo.email);
        expect(user.getPasswordToHash()).toBe(userInfo.password);
    })

})