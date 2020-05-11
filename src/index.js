require("dotenv").config(); // Load envirements variables.
const ApiServer = require("./api/server");

ApiServer.listen(process.env.PORT || 4000, () => {
    console.log(
        `Tazker Rest API Server running on http://${process.env.HOST}:${process.env.PORT}/
    `)
});