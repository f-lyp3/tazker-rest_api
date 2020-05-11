function buildTaskRoutesHandler({ router, expressCallbackHelper, TaskController }){
    
    router.post("/tasks", expressCallbackHelper(TaskController.postTask));
    router.get("/tasks", expressCallbackHelper(TaskController.listTask));
    router.get("/tasks/:id", expressCallbackHelper(TaskController.getTask));
    router.put("/tasks/:id", expressCallbackHelper(TaskController.putTask));
    router.delete("/tasks/:id", expressCallbackHelper(TaskController.deleteTask));

    return router;
}

module.exports = buildTaskRoutesHandler;