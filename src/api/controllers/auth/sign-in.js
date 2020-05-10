function buildPostSignIn({ AuthService }){
    return async function postSignUp({ email, password }){
        try {
            const auth = await AuthService.signIn({ email, password });

            return Object.freeze({
                body: { auth },
                statusCode: 200
            });
            
        } catch (e) {
            return Object.freeze({
                body: { error: e.message },
                statusCode: 400
            });
        }
    }
}

module.exports = buildPostSignIn;