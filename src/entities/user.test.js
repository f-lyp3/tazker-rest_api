const { makeUser } = require("./");

const { generateFakeUser } = require("../../__tests__/data-faker");

describe("User data validation", () => {

    it("Should have firstname", () => {
        const userInfo = generateFakeUser({ firstname: null});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have valid firstname", () => {
        const userInfo = generateFakeUser({ firstname: "N0tV4lid"});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have lastname", () => {
        const userInfo = generateFakeUser({ lastname: null});
        expect(() => makeUser(userInfo)).toThrow();
    });

    it("Should have valid lastname", () => {
        const userInfo = generateFakeUser({ lastname: "N0tV4lid"});
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

        expect(user.getFirstname()).toBe(userInfo.firstname);
        expect(user.getFirstname()).toBe(userInfo.firstname);
        expect(user.getFirstname()).toBe(userInfo.firstname);
        expect(user.getPasswordToHash()).toBe(userInfo.password);
    })

})