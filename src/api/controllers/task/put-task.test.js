const { postTask, putTask } = require(".");

const { generateFakeTask } = require("../../../../__tests__/data-faker");


describe("Patching a task", () => {

    it("Should put a task by id", async (done) => {
        const result = await postTask(generateFakeTask());
        const { posted } = result.body;

        const { body, statusCode } = await putTask(posted._id, { name: "Save the World!" })

        expect(statusCode).toBe(201);
        expect(body.updated.name).toBe("Save the World!");
        done()
    });

    it("Should catch any thrown error", async (done) => {
        const { body, statusCode } = await putTask("5e8454326b9a0b352e98a9a4", {
            name: "it Won't work"
        });

        expect(statusCode).toBe(401);
        expect(body.error).toBe("Task doesn't exists!");
        done()
    })

});