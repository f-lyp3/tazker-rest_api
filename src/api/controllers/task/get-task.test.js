const { getTask, postTask } = require("./");

const { generateFakeTask } = require("../../../../__tests__/data-faker");

describe("Get task's details", () => {

    it("Should get a task's details", async (done) => {
        const result = await postTask(
            {
                body: generateFakeTask(),
                realRequestObj: {userId: generateFakeTask().ownerId }
            },
        );
        const { posted } = result.body;

        const { body, statusCode } = await getTask({
            params: { id: posted._id },
            realRequestObj: {userId: generateFakeTask().ownerId }
        });
        const { found } = body;

        expect(statusCode).toBe(200);
        expect(posted._id.toString()).toBe(found._id.toString());
        done()
    });

    it("Should get an 404 error trying to get no-existing task", async (done) => {
        const { body, statusCode } = await getTask({
            params: { id: "5e8454326b9a0b352e98a9a4"},
            realRequestObj: {userId: generateFakeTask().ownerId }
        });

        expect(statusCode).toBe(404);
        expect(body.error).toBe("Task not found!");
        done();
    })

    it("Should get an 401 error trying to get a task with invalid id", async (done) => {
        const { body, statusCode } = await getTask(
            { 
                params: { id: "5e8454326b9a0b3e98a9a4"},
                realRequestObj: {userId: generateFakeTask().ownerId }
            }
         );

        expect(statusCode).toBe(400);
        expect(body.error).toBe("Must provide a valid task id!");
        done();
    })

});