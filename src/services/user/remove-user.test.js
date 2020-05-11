const { removeUser, createUser } = require("./");

const { generateFakeUser } = require("../../../__tests__/data-faker");


describe("Get User", () => {

    it("Should not remove a user without an id", async (done) => {
        expect(removeUser({})).rejects.toThrow("Must provide a valid user id!")
        done()
    })

    it("Should not remove a user with invalid id", async (done) => {
        expect(removeUser("1dfd9r38dfsdf3")).rejects.toThrow("Must provide a valid user id!")
        done()
    })

    it("Should not remove non-existing user", async (done) => {
        expect(removeUser("5bcba4dd8609b7d2187651a7")).rejects.toThrow("Must provide a valid user id!")
        done()
    })

    it("Should remove an existing user with valid id", async (done) => {
        const created = await createUser(generateFakeUser());
        const deleted = await removeUser({ id: created._id});

        expect(deleted).toBeDefined()
        expect(deleted._id).toStrictEqual(created._id);
        done()
    })
})