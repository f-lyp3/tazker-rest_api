const { postSignUp } = require("./");

const { generateFakeUser } = require("../../../../__tests__/data-faker");

describe("Post sign up", () => {
    
    it("Should create a user and return an authentication object", async (done) => {
        const user = generateFakeUser();
        const { body, statusCode } = await postSignUp({ body: user })
        expect(statusCode).toBe(201);
        done();
    })

})