const { updateUser, addUser } = require("./");

const { generateFakeUser } = require("../../../__tests__/data-faker");

describe("Update User", () => {
    it("Should not update a user without an id", async (done) => {
        expect(updateUser({})).rejects.toThrow("Must provide a valid user id!");
        done();
    });

    it("Should not update a user with a invalid id", async (done) => {
        expect(updateUser({id: "dfd9fdfsdf9dfdf"})).rejects.toThrow("Must provide a valid user id!");
        done();
    });

    it("Should not update a non-existing user", async (done) => {
        expect(await updateUser({ id: "5bcba4dd8609b7d2187651a9"}, {})).toBe(null);
        done();
    });

    // it("Should not update a user with invalid update's fields", async (done) => {
    //     const createdUser = await addUser(generateFakeUser());

    //     expect(updateUser({id: createdUser._id}, {
    //         name: "new name",
    //         job: "Programmer",
    //     })).rejects.toThrow('Invalid update\'s fields! [name, job]');
    //     done();
    // })

    // it("Should not update a user by id with invalid values", async (done) => {
    //     const createdUser = await addUser(generateFakeUser());

    //     expect(updateUser({id: createdUser._id}, {
    //         firstName: "",
    //         sex: "M"
    //     })).rejects.toThrow();
    //     done();
    // })

    it("Should update an user by its id", async (done) => {
        const userInfo = generateFakeUser();
        
        const createdUser = await addUser(userInfo);
        
        const updatedUser = await updateUser({id: createdUser._id }, {
            firstName: "Hello",
            lastName: "World"
        });

        expect(updatedUser).toBeDefined();
        expect(updatedUser._id).toStrictEqual(createdUser._id);
        expect(updatedUser.firstName).not.toBe(createdUser.firstName);
        expect(updatedUser.lastName).not.toBe(createdUser.lasttname);
        done();
    })
})