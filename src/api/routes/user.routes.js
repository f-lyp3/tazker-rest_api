function buildUserRoutesHandler({ router, expressCallbackHelper, UserController, AuthController }){

    // Only authencticate user's will access these routes
    router.use(expressCallbackHelper(AuthController.isAuthenticated))
    router.get("/user/me", expressCallbackHelper(UserController.getMe));
    router.get("/user/:id", expressCallbackHelper(UserController.getUser));
    router.put("/user/me", expressCallbackHelper(UserController.putUser));
    router.delete("/user/me", expressCallbackHelper(UserController.deleteUser));

    return router;
}

module.exports = buildUserRoutesHandler;