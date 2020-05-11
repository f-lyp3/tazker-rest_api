function buildPostSignUp({ AuthService }){
    return async function postSignUp({ body }){
        const user = body;
        console.log(body, user);
        try {
            const auth = await AuthService.signUp({ ...user });

            return Object.freeze({
                body: { auth },
                statusCode: 201
            });
            
        } catch (e) {
            return Object.freeze({
                body: { error: e.message },
                statusCode: 400
            });
        }
    }
}

module.exports = buildPostSignUp;