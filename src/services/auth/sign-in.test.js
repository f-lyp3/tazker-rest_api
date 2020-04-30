const { signIn } = require("./")
const { createUser } = require("../user")

const { generateFakeUser } = require("../../../__tests__/data-faker");
const trucanteDb = require("../../utils/truncate-db");

describe("Sign In", () => {
    beforeAll( async (done) => {
        await trucanteDb()
        done()
    })
    afterAll( async (done) => {
        await trucanteDb()
        done()
    })

    it("Should not authenticate with a non-existing user's email", async (done) => {
        const user = generateFakeUser();
        expect(signIn(user)).rejects.toThrow()
        done()
    })

    it("Should not authenticate a user with wrong password", async (done) => {
        const userInfo = generateFakeUser();
        const createdUser = await createUser(userInfo);
        expect(signIn({ ...createdUser, password: "12345"})).rejects.toThrow()
        done()
    })

    it("Should authenticate a user with valid email and password", async (done) => {
        const userInfo = generateFakeUser();
        let _ = await createUser(userInfo);
        const result = await signIn(userInfo);
       
        expect(result.user).toBeDefined();
        expect(result.token).toBeDefined();
        done()
    })
})