function buildAuthRouterHandler({ router, expressCallbackHelper, AuthController }){

    router.post("/signup", expressCallbackHelper(AuthController.postSignUp));
    router.post("/signin", expressCallbackHelper(AuthController.postSignIn));

    return router;
}

module.exports = buildAuthRouterHandler;