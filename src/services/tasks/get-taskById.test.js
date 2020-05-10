const { getTask, createTask } = require(".");

const { generateFakeTask } = require("../../../__tests__/data-faker");

describe("Get Task", () => {

    it("Should not find a Task without an id", async (done) => {
        expect(getTask()).rejects.toThrow()
        done()
    })

    it("Should not find a Task with an invalid id", async (done) => {
        expect(getTask({ id: "1dfd9r38dfsdf3"})).rejects.toThrow()
        done()
    })


    it("Should find an existing Task with valid id", async (done) => {
        const created = await createTask(generateFakeTask());
        const found = await getTask({ id: created._id});

        expect(found).toBeDefined()
        expect(found._id).toStrictEqual(created._id);
        done()
    })
})