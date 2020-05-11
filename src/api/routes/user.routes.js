function buildUserRoutesHandler({ router, expressCallbackHelper, UserController }){

    router.get("/:id", expressCallbackHelper(UserController.getUser));
    router.put("/:id", expressCallbackHelper(UserController.putUser));
    router.delete("/:id", expressCallbackHelper(UserController.deleteUser));

    return router;
}

module.exports = buildUserRoutesHandler;