function buildTaskRoutesHandler({ router, expressCallbackHelper, TaskController, AuthController }){
    
    // Only authencticate user's will access these routes
    router.use(expressCallbackHelper(AuthController.isAuthenticated))

    router.post("/tasks", expressCallbackHelper(TaskController.postTask));
    router.get("/tasks", expressCallbackHelper(TaskController.listTask));
    router.get("/tasks/:id", expressCallbackHelper(TaskController.getTask));
    router.put("/tasks/:id", expressCallbackHelper(TaskController.putTask));
    router.delete("/tasks/:id", expressCallbackHelper(TaskController.deleteTask));

    return router;
}

module.exports = buildTaskRoutesHandler;