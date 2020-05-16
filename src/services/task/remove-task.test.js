const { addTask, removeTask } = require("./");

const { generateFakeTask } = require("../../../__tests__/data-faker");

describe("Remove Task use-case", () => {
    it("Should faill to remove non-existing task with valid id", async (done) => {
        const id = "5e86272b0ceb652cc7591e77"
        const removedTask = await removeTask({ id });
        
        expect(removedTask).toBe(null)
        done()
    })

    it("Should faill to remove a task with invalid id", async (done) => {
        const id = "5e86272b0ceb652cc7591"
        expect(removeTask({ id })).rejects.toThrow("Must provide a valid task id!")
        done()
    })

    it("Should remove a task by its id", async (done) => {
        const created = await addTask(generateFakeTask());
        const deleted = await removeTask({ id: created._id});

        expect(deleted).toBeDefined()
        expect(deleted._id).toStrictEqual(created._id)
        done()
    })
})