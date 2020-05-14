const { updateUser, createUser } = require("./");

const { generateFakeUser } = require("../../../__tests__/data-faker");

describe("Update User", () => {
    it("Should not update a user without an id", async (done) => {
        expect(updateUser()).rejects.toThrow("Must provide a valid user id!");
        done();
    });

    it("Should not update a user with a invalid id", async (done) => {
        expect(updateUser("dfd9fdfsdf9dfdf")).rejects.toThrow("Must provide a valid user id!");
        done();
    });

    it("Should not update a non-existing user", async (done) => {
        expect(await updateUser("5bcba4dd8609b7d2187651a9", {})).toBe(null);
        done();
    });

    it("Should not update a user with invalid update's fields", async (done) => {
        const user = await createUser(generateFakeUser());

        expect(updateUser(user._id, {
            name: "new name",
            job: "Programmer",
        })).rejects.toThrow('Invalid update\'s fields! [name, job]');
        done();
    })

    it("Should not update a user by id with invalid values", async (done) => {
        const user = await createUser(generateFakeUser());

        expect(updateUser(user._id, {
            firstName: "",
        })).rejects.toThrow();
        done();
    })

    it("Should update an user by its id", async (done) => {
        const userInfo = generateFakeUser();
        
        const user = await createUser(userInfo);
        
        const updatedUser = await updateUser(user._id, {
            firstName: "Hello",
            lastName: "World"
        });

        expect(updatedUser).toBeDefined();
        expect(updatedUser._id).toStrictEqual(user._id);
        expect(updatedUser.firstName).not.toBe(user.firstName);
        expect(updatedUser.lastName).not.toBe(user.lasttname);
        done();
    })
})