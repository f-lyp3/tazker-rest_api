const { createUser } = require(".")

const { generateFakeUser } = require("../../../__tests__/data-faker");
const truncateDb = require("../../utils/truncate-db");

describe("User creation", () => {
    beforeAll(async (done) => {
        await truncateDb()
        done()
    })

    it("Should create a user", async (done) => {
        const user = generateFakeUser()
        const createdUser = await createUser(user);
        
        expect(createdUser).toBeDefined()
        expect(createdUser.firstname).toBe(user.firstname)
        expect(createdUser.lastname).toBe(user.lastname)

        done()
    })
})