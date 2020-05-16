const { UserDb} = require("./")

const { generateFakeUser } = require("../../__tests__/data-faker");

describe("User Database Interactor", () => {
    it("Should insert an user into database", async (done) => {
        const userInfo = generateFakeUser();
        const createdUser = await UserDb.insert(userInfo);
     
        expect(createdUser).toBeDefined();
        expect(createdUser._id).toBeDefined();
        expect(createdUser.firstName).toBe(userInfo.firstName);
        expect(createdUser.lastName).toBe(userInfo.lastName);
        expect(createdUser.email).toBe(userInfo.email);
        expect(createdUser.password).toBe(userInfo.password);
        expect(createdUser.createdAt).toBeDefined();
        done();
    })

    it("Should find an user by Id", async (done) => {
        const createdUser = await UserDb.insert(generateFakeUser())
        const foundUser = await UserDb.find({_id: createdUser._id});
        
        expect(foundUser).toBeDefined();
        expect(foundUser._id).toStrictEqual(createdUser._id);
        done();
    });

    it("Should find an user by Email", async (done) => {
        const createdUser = await UserDb.insert(generateFakeUser())
        const foundUser = await UserDb.findByEmail({ email: createdUser.email });
        
        expect(foundUser).toBeDefined();
        expect(foundUser._id).toStrictEqual(createdUser._id);
        expect(foundUser.email).toBe(createdUser.email);
        done();
    });

    it("Should update an user by id", async (done) => {
        const createdUser = await UserDb.insert(generateFakeUser())
        const updates = { firstName: "Hello", lastName: "World" }
        const updatedUser = await UserDb.update({_id: createdUser._id}, updates);
        
        expect(updatedUser).toBeDefined();
        expect(updatedUser._id).toStrictEqual(createdUser._id);
        expect(updatedUser.firstName).toBe(updates.firstName);
        expect(updatedUser.lastName).toBe(updates.lastName);
        done();
    });

    it("Should delete an user by Id", async (done) => {
        const createdUser = await UserDb.insert(generateFakeUser())
        const removedUser = await UserDb.remove({_id: createdUser._id});
        
        expect(removedUser).toBeDefined();
        expect(removedUser._id).toStrictEqual(createdUser._id);
        done();
    });
});