const { addUser } = require(".")

const { generateFakeUser } = require("../../../__tests__/data-faker");
const truncateDb = require("../../utils/truncate-db");

describe("User creation", () => {
    beforeAll(async (done) => {
        await truncateDb()
        done()
    })

    it("Should create a user", async (done) => {
        const user = generateFakeUser()
        const createdUser = await addUser(user);
        
        expect(createdUser).toBeDefined()
        expect(createdUser.firstName).toBe(user.firstName)
        expect(createdUser.lastName).toBe(user.lastName)

        done()
    })
})