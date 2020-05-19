const faker = require("faker");

const {
    capitalizeText,
    capitalizeWord
} = require("../../src/utils/normalizer");

function generateFakeUser(overrides){
    return Object.freeze({
        firstName: capitalizeWord(faker.name.firstName()),
        lastName: capitalizeWord(faker.name.firstName()),
        email: faker.internet.email(),
        password: "M1p4$$0rD",
        ...overrides // Manual fields and overrides
    })
}

function generateFakeTask(overrides){
    return Object.freeze({
        name: capitalizeText(faker.lorem.words(3)),
        ownerId: "5e8454326b9a0b352e98a9a4",
        parentId: null,
        ...overrides
    })
}

module.exports = {
    generateFakeUser,
    generateFakeTask
}