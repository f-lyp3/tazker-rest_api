const { addTask, makeTaskComplete } = require(".");

const { generateFakeTask } = require("../../../__tests__/data-faker");

describe("Make task completed", () => {
    it("Should make a task completed", async (done) => {
        const taskInfo = generateFakeTask();
        const createdTask = await addTask(taskInfo);

        const completedTask = await makeTaskComplete({ id: createdTask._id });
        
        expect(completedTask).toBeDefined();
        expect(completedTask._id.toString()).toBe(createdTask._id.toString());
        expect(completedTask.completed).toBe(true);
        done();
    })

    it("Should not makeTaskComplete task by invalid ID", async (done) => {
        expect(makeTaskComplete({ id: "sdf93df93kd9130df" })).rejects.toThrow("Must provide a valid task id!");
        done()
    });

    it("Should not makeTaskComplete non-existing task with valid ID", async (done) => {
        const completed = await makeTaskComplete({ id: "5e85063d37501e5b62df0782" })
        
        expect(completed).toBe(null)
        done()
    });
})