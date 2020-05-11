const Express = require("express");

const app = Express();

const {
    AuthRoutesHandler,
    UserRoutesHandler
} = require("./routes");


// Setting up express' middlewares
app.use(Express.json());

// app.use((req, res, next) => {
//     console.log(req.body)
//     next()
// })

app.use("/auth", AuthRoutesHandler);
app.use("/user", UserRoutesHandler);

app.listen(4000, () => {
    console.log("server is running!");
});