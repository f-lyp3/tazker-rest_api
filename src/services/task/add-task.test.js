const { addTask } = require(".")

const { generateFakeTask } = require("../../../__tests__/data-faker")

describe("Task creation", () => {
    
    it("Should create a task with valid information", async (done) => {
        const task = generateFakeTask()
        const created = await addTask(task)
        
        expect(created._id).toBeDefined();
        expect(created.name).toBe(task.name);
        expect(created.ownerId.toString()).toBe(task.ownerId.toString());
        expect(created.completed).toBe(false);

        done()
    });

    it("Should not create a task with non-existing task parent id", async (done) => {
        const newTask = generateFakeTask({ parentId: "5e84c7580ca804274bd08536"})
        expect(addTask(newTask)).rejects.toThrow()
        done()
    })

    it("Should not create a task with invalid task parent id", async (done) => {
        const newTask = generateFakeTask({ parentId: "5e84c7580ca8042bd08536"})
        expect(addTask(newTask)).rejects.toThrow()
        done()
    })

    it("Should create a task with  an existing task parent id", async (done) => {
        const task = await addTask(generateFakeTask())
        const subTask = await addTask(generateFakeTask({ parentId: task._id }))

        expect(subTask).toBeDefined()
        expect(subTask.parentId).toStrictEqual(task._id)

        done()
    })

    it("Should not create a task without an author", async (done) => {
        expect(addTask(generateFakeTask({ ownerId: null }))).rejects.toThrow();
        done();
    })

    it("Should not create a task with invalid author's id", async (done) => {
        expect(addTask(generateFakeTask({ ownerId: "d3dir9dfdsf93d0f3d0f3" })))
            .rejects.toThrow()
        done();
    })
})