const { getUserById, createUser } = require(".");

const { generateFakeUser } = require("../../../__tests__/data-faker");


describe("Get User", () => {

    it("Should not find a user without a query param", async (done) => {
        expect(getUserById()).rejects.toThrow()
        done()
    })

    it("Should not find a user with invalid id", async (done) => {
        expect(getUserById({ id: "1dfd9r38dfsdf3"})).rejects.toThrow()
        done()
    })


    it("Should find an existing user with valid id", async (done) => {
        const created = await createUser(generateFakeUser());
        const found = await getUserById({ id: created._id});

        expect(found).toBeDefined()
        expect(found._id).toStrictEqual(created._id);
        done()
    })
})