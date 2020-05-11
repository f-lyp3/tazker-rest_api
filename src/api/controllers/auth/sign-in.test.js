const { postSignIn } = require("./");

const UserService = require("../../../services/user");

const { generateFakeUser } = require("../../../../__tests__/data-faker");

describe("Post sign In", () => {
    
    it("Should signin an user and return an authentication object", async (done) => {
        const user = generateFakeUser();
        const _ = await UserService.createUser(user);
        const { body, statusCode } = await postSignIn({ body: user })
        expect(statusCode).toBe(200);
        done();
    });

    it("Should not signin an user with incorrect email", async (done) => {
        const user = generateFakeUser();
        const _ = await UserService.createUser(user);
        const { body, statusCode } = await postSignIn({ body: { ...user, email: "caixaforte@gmail.com"} })
        expect(statusCode).toBe(400);
        done();
    });

    it("Should not signin an user with incorrect password", async (done) => {
        const user = generateFakeUser();
        const _ = await UserService.createUser(user);
        const { body, statusCode } = await postSignIn({body: { ...user, password: "caixaforte@gmail.com" }})
        expect(statusCode).toBe(400);
        done();
    });

})