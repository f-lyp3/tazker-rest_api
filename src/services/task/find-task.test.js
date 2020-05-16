const { findTask, addTask } = require(".");

const { generateFakeTask } = require("../../../__tests__/data-faker");

describe("Finding a Task", () => {

    it("Should not find a Task with an invalid id", async (done) => {
        expect(findTask({ id: "1dfd9r38dfsdf3"})).rejects.toThrow()
        done()
    })


    it("Should find an existing Task with valid id", async (done) => {
        const created = await addTask(generateFakeTask());
        const found = await findTask({ id: created._id});

        expect(found).toBeDefined()
        expect(found._id).toStrictEqual(created._id);
        done()
    })
})