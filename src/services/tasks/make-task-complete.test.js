const { createTask, makeCompleted } = require(".");

const { generateFakeTask } = require("../../../__tests__/data-faker");

describe("Make task completed", () => {
    it("Should make a task completed", async (done) => {
        const taskInfo = generateFakeTask();
        const createdTask = await createTask(taskInfo);

        const completedTask = await makeCompleted({ id: createdTask._id });
        
        expect(completedTask).toBeDefined();
        expect(completedTask._id.toString()).toBe(createdTask._id.toString());
        expect(completedTask.completed).toBe(true);
        done();
    })

    it("Should not makeCompleted task by invalid ID", async (done) => {
        expect(makeCompleted({ id: "sdf93df93kd9130df" })).rejects.toThrow("Invalid task id!");
        done()
    });

    it("Should not makeCompleted non-existing task with valid ID", async (done) => {
        expect(makeCompleted({ id: "5e85063d37501e5b62df0782" }))
            .rejects.toThrow("Task doesn't exists!");

        done()
    });
})