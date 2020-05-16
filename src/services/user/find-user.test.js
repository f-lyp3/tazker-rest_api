const { findUser, addUser } = require(".");

const { generateFakeUser } = require("../../../__tests__/data-faker");


describe("Get User", () => {

    it("Should not find a user without a query param", async (done) => {
        expect(findUser()).rejects.toThrow()
        done()
    })

    it("Should not find a user with invalid id", async (done) => {
        expect(findUser({ id: "1dfd9r38dfsdf3"})).rejects.toThrow()
        done()
    })


    it("Should find an existing user with valid id", async (done) => {
        const createdUser = await addUser(generateFakeUser());
        const foundUser = await findUser({ id: createdUser._id});

        expect(foundUser).toBeDefined()
        expect(foundUser._id).toStrictEqual(createdUser._id);
        done()
    })
})