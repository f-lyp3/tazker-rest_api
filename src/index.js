const {
    HOST,
    PORT
} = require("../config/config");

const ApiServer = require("./api/server");

ApiServer.listen(PORT || 4000, () => {
    console.log(
        `Tazker Rest API Server running on http://${HOST}:${PORT}/
    `)
});