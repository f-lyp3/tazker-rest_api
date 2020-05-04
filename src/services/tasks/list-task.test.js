const { listTask, createTask } = require("./");

const { generateFakeTask } = require("../../../__tests__/data-faker");

const { TaskDb } = require("../../database");

describe("Listing Task use-case", () => {

    it("Should return all completed tasks", async (done) => {
        await Promise.all([1,2,3,4,5,6,7,8,9].map(async () => {
            await TaskDb.insert(generateFakeTask({completed: true}))
        }));

        const tasks = await listTask({ completed: true });
        const everyCompleted = tasks.every(task => task.completed === true);

        expect(tasks).toBeDefined()
        expect(everyCompleted).toBe(true);

        done();
    })

    // TODO: return only user parents' tasks
    it("Should return all non-completed tasks", async (done) => {
        await Promise.all([1,2,3,4,5,6].map(async () => {
            await TaskDb.insert(generateFakeTask({completed: false}))
        }));

        const tasks = await listTask({ completed: false });
        const everyInNonCompleted = tasks.every(task => task.completed === false);

        expect(tasks).toBeDefined()
        expect(everyInNonCompleted).toBe(true);

        done();
    })

    it("Should find all tasks in db", async (done) => {
        const allTask = await listTask();
        const taskLenGreaterThanZero = allTask.length > 0;
        expect(allTask).toBeDefined()
        expect(taskLenGreaterThanZero).toBe(true)
        done()
    })

})