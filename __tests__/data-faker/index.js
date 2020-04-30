const faker = require("faker");

function generateFakeUser(overrides){
    return Object.freeze({
        firstname: faker.name.firstName(),
        lastname: faker.name.firstName(),
        email: faker.internet.email(),
        password: "M1p4$$0rD",
        ...overrides // Manual fields and overrides
    })
}

module.exports = {
    generateFakeUser
}