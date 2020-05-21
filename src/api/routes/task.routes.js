function buildTaskRoutesHandler({ router, expressCallbackHelper, TaskController, AuthController }){
    
    // Only authencticate user's will access these routes
    router.use(expressCallbackHelper(AuthController.isAuthenticated))

    router.post("/", expressCallbackHelper(TaskController.postTask));
    router.get("/", expressCallbackHelper(TaskController.listTask));
    router.get("/:id", expressCallbackHelper(TaskController.getTask));
    router.put("/:id", expressCallbackHelper(TaskController.putTask));
    router.delete("/:id", expressCallbackHelper(TaskController.deleteTask));

    return router;
}

module.exports = buildTaskRoutesHandler;