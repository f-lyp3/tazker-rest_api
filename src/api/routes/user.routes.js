function buildUserRoutesHandler({ router, expressCallbackHelper, UserController, AuthController }){

    // Only authencticate user's will access these routes
    router.use(expressCallbackHelper(AuthController.isAuthenticated))
    router.get("/me", expressCallbackHelper(UserController.getMe));
    router.get("/:id", expressCallbackHelper(UserController.getUser));
    router.put("/me", expressCallbackHelper(UserController.putUser));
    router.delete("/me", expressCallbackHelper(UserController.deleteUser));

    return router;
}

module.exports = buildUserRoutesHandler;