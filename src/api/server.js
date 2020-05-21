const Express = require("express");

// Instateate a new Express application
const app = Express();

// Bringing in all route's handlers.
const routes = require("./routes");


// Setting up express' middlewares
app.use(Express.json());

// An request logger.
// app.use((req, _, next) => {
//     console.log("the route path: ", req.url)
//     next()
// })

// Configuring the routes
app.use("/api", routes);

// Make app avaliable outside, so we can test it without running the actual server
module.exports = app;