const { createTask, updateTask } = require("./")

const { generateFakeTask } = require("../../../__tests__/data-faker")


describe("Update Task", () => {

    it("Should update task by its valid ID", async (done) => {
        const created = await createTask(generateFakeTask({author: "5bcba4dd8111b7d2187651a5"}))
        const updated = await updateTask({id: created._id, name: "New task name!"})

        expect(updated).toBeDefined()
        expect(updated._id).toStrictEqual(created._id);
        expect(updated.name).toBe("New task name!")

        done()
    });

    it("Should not update task by invalid ID", async (done) => {
        expect(updateTask({ id: "sdf93df93kd9130df", name: "should not update!"})).rejects.toThrow("Invalid task id!");
        done()
    });

    it("Should not update non-existing task with valid ID", async (done) => {
        expect(updateTask({ id: "5e85063d37501e5b62df0782", name: "shouldn't update!"}))
            .rejects.toThrow("Task doesn't exists!");

        done()
    });

    it("Should not update with not allowed fields", async (done) => {
        const created = await createTask(generateFakeTask())

        expect(updateTask({
            id: created._id,
            name: "should not update!",
            description: "Hello world!",
            createdAt: Date.now(),
            ref: "5e85063d37501e5b62df0782",
            updatedAt: Date.now()
        })).rejects.toThrow("Invalid updates fields! [createdAt, ref, updatedAt]");

        done()
    })

})