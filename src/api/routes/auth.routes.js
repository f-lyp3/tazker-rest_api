function buildAuthRouterHandler({ router, expressCallbackHelper, AuthController }){

    router.post("/auth/signup", expressCallbackHelper(AuthController.postSignUp));
    router.post("/auth/signin", expressCallbackHelper(AuthController.postSignIn));

    return router;
}

module.exports = buildAuthRouterHandler;