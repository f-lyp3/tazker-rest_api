const { getTaskById, createTask } = require(".");

const { generateFakeTask } = require("../../../__tests__/data-faker");

describe("Get Task", () => {

    it("Should not find a Task without an id", async (done) => {
        expect(getTaskById()).rejects.toThrow()
        done()
    })

    it("Should not find a Task with an invalid id", async (done) => {
        expect(getTaskById({ id: "1dfd9r38dfsdf3"})).rejects.toThrow()
        done()
    })


    it("Should find an existing Task with valid id", async (done) => {
        const created = await createTask(generateFakeTask());
        const found = await getTaskById({ id: created._id});

        expect(found).toBeDefined()
        expect(found._id).toStrictEqual(created._id);
        done()
    })
})