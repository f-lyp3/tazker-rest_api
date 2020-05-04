const { TaskDb } = require("./");

const { generateFakeTask } = require("../../__tests__/data-faker");
const truncateDb = require("../utils/truncate-db");

describe("Task Database", () => {
    beforeAll(async (done) => {
        await truncateDb();
        done();
    });

    it("Should insert a task to db", async (done) => {
        const taskInfo = generateFakeTask();
        // Manual create a hash cause don't wanna bring task entity object here as a dependency.
        const createdTask = await TaskDb.insert({...taskInfo, hash: "5e8454326b9a0b352e98a9a4"});

        expect(createdTask).toBeDefined();
        expect(createdTask.name).toBe(taskInfo.name)
        expect(String(createdTask.authorID)).toBe(taskInfo.authorID)
        expect(String(createdTask.parentID)).toBe(taskInfo.parentID)
        expect(createdTask.hash).toBeDefined()
        done()
    });

    it("Should find a task by its id", async (done) => {
        const createdTask = await TaskDb.insert(generateFakeTask());
        const foundTask = await TaskDb.findById(createdTask._id);
        
        expect(foundTask).toBeDefined();
        expect(String(foundTask._id)).toBe(String(createdTask._id));
        done();
    })

    it("Should find all task", async (done) => {
        const foundTasks = await TaskDb.findAll({});
        expect(foundTasks.length).toBeGreaterThan(0);
        done()
    })

    it("Should find all task that match a query", async (done) => {
        const createdTask = await TaskDb.insert(generateFakeTask({authorID: "5e8454326b9a0b352e98a9a7"}));
        const foundTasks = await TaskDb.findAll({authorID: createdTask.authorID});
        
        expect(foundTasks).toBeDefined();
        expect(foundTasks.length).toBeGreaterThan(0);
        done()
    })

    it("Should update a task by its id", async (done) => {
        const updates = {name: "finish my task rest-api"}
        const createdTask = await TaskDb.insert(generateFakeTask());
        const updatedTask = await TaskDb.updateById(createdTask._id, updates);
        
        expect(updatedTask).toBeDefined();
        expect(String(updatedTask._id)).toBe(String(createdTask._id));
        expect(updatedTask.name).toBe(updates.name);
        done();
    })

    it("Should remove a task by its id", async (done) => {
        const createdTask = await TaskDb.insert(generateFakeTask());
        const removedTask = await TaskDb.removeById(createdTask._id);

        expect(removedTask).toBeDefined();
        expect(String(removedTask._id)).toBe(String(createdTask._id));
        done();
    })
})