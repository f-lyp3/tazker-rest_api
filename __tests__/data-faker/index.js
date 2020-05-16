const faker = require("faker");

function generateFakeUser(overrides){
    return Object.freeze({
        firstName: faker.name.firstName(),
        lastName: faker.name.firstName(),
        email: faker.internet.email(),
        password: "M1p4$$0rD",
        ...overrides // Manual fields and overrides
    })
}

function generateFakeTask(overrides){
    return Object.freeze({
        name: faker.lorem.words(3),
        ownerId: "5e8454326b9a0b352e98a9a4",
        parentId: null,
        ...overrides
    })
}

module.exports = {
    generateFakeUser,
    generateFakeTask
}