const { postTask, putTask } = require(".");

const { generateFakeTask } = require("../../../../__tests__/data-faker");


describe("Patching a task", () => {

    it("Should put a task by id", async (done) => {
        const result = await postTask({
            body: generateFakeTask(),
            realRequestObj: {userId: generateFakeTask().ownerId }
        });
        const { posted } = result.body;

        const { body, statusCode } = await putTask({
                params: {
                    id: posted._id
                },
                body: {
                    name: "Save the World!"
                },
                realRequestObj: {userId: generateFakeTask().ownerId }
            });

        expect(statusCode).toBe(201);
        expect(body.updated.name).toBe("Save the World!");
        done()
    });

    it("Should catch any thrown error", async (done) => {
        const { body, statusCode } = await putTask({
            params: {
                id: "5e8454326b9a0b352e98a9a4"
            },
            body: {
                name: "it Won't work"
            },
            realRequestObj: {userId: generateFakeTask().ownerId }
        });

        expect(statusCode).toBe(404);
        expect(body.error).toBe("Task not found!");
        done()
    })

});