function buildUserRoutesHandler({ router, expressCallbackHelper, UserController }){

    router.get("/user/:id", expressCallbackHelper(UserController.getUser));
    router.put("/user/:id", expressCallbackHelper(UserController.putUser));
    router.delete("/user/:id", expressCallbackHelper(UserController.deleteUser));

    return router;
}

module.exports = buildUserRoutesHandler;