const { signUp } = require("./");

const { generateFakeUser } = require("../../../__tests__/data-faker");

describe("Auth Sign-Up", () => {

    it("Should sign up a user and return a token as well", async (done) => {
        const auth = await signUp(generateFakeUser());

        expect(auth).toBeDefined();
        expect(auth.user).toBeDefined();
        expect(auth.token).toBeDefined();
        done();
    });

});