const Express = require("express");

// Instateate a new Express application
const app = Express();

// Bringing in all route's handlers.
const {
    AuthRoutesHandler,
    UserRoutesHandler,
    TaskRoutesHandler
} = require("./routes");


// Setting up express' middlewares
app.use(Express.json());

// An request logger.
// app.use((req, _, next) => {
//     console.log("the route path: ", req.url)
//     next()
// })

// Configuring the routes
app.use("/api", AuthRoutesHandler);
app.use("/api", UserRoutesHandler);
app.use("/api", TaskRoutesHandler);

// Make app avaliable outside, so we can test it without running the actual server
module.exports = app;