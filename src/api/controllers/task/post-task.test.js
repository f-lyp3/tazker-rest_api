const { postTask } = require("./");

const { generateFakeTask } = require("../../../../__tests__/data-faker");


describe("Post Task", () => {

    it("Should post a task", async (done) => {
        const task = generateFakeTask()
        const { body, statusCode } = await postTask(
            {
                body: task,
                realRequestObj: {userId: generateFakeTask().ownerId }
            });

        expect(body).toBeDefined()
        expect(body.posted).toBeDefined()
        expect(statusCode).toBe(201)
        done()
    })

    it("Should catch every throwed error", async (done) => {
        const task = generateFakeTask({ name: null });
        const { body, statusCode } = await postTask(
            {
                body: task,
                realRequestObj: {userId: generateFakeTask().ownerId }
            });

        expect(body.error).toBeDefined();
        expect(statusCode).toBe(400);
        done();
    })
})