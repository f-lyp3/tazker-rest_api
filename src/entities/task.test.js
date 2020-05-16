const { makeTask } = require("./");

const { generateFakeTask } = require("../../__tests__/data-faker");

describe("Task Entity Object", () => {
    it("Should have a name", () => {
        const taskInfo = generateFakeTask({name: null});
        expect(() => makeTask(taskInfo)).toThrow()
    })
    it("Should have an author id", () => {
        const taskInfo = generateFakeTask({ownerId: null});
        expect(() => makeTask(taskInfo)).toThrow()
    })

    it("Should have a valid author's id", () => {
        const taskInfo = generateFakeTask({ownerId: "d8kdfsd9312dfsdf"});
        expect(() => makeTask(taskInfo)).toThrow()
    })

    it("Should have a valid parent's id", () => {
        const taskInfo = generateFakeTask({parentId: "d8kdfsd9312dfsdf"});
        expect(() => makeTask(taskInfo)).toThrow()
    })

    it("Should make a new task with valid info", () => {
        const taskInfo = generateFakeTask();
        const task = makeTask(taskInfo);

        expect(task.getName()).toBe(taskInfo.name);
        expect(task.getOwnerId()).toBe(taskInfo.ownerId);
        expect(task.getParentId()).toBe(taskInfo.parentId);
        expect(task.getHash()).toBeDefined();
    })
})