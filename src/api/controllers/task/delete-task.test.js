const { postTask, deleteTask } = require(".");

const { generateFakeTask } = require("../../../../__tests__/data-faker");


describe("Patching a task", () => {

    it("Should delete a task by id", async (done) => {
        const result = await postTask(generateFakeTask());
        const { posted } = result.body;

        const { body, statusCode } = await deleteTask(posted._id)

        expect(statusCode).toBe(201);
        expect(body.deleted._id.toString()).toBe(posted._id.toString());
        done()
    });

    it("Should catch any thrown error", async (done) => {
        const { body, statusCode } = await deleteTask("5e8454326b9a0b352e98a9a4");

        expect(statusCode).toBe(400);
        expect(body.error).toBe("Task doesn't exists!");
        done()
    })

});