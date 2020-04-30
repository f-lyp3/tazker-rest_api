function buildSignUp({ UserService, authenticate }){
    // A factory function who will create a user and
    return async function signUp(userInfo){
        // Create a new User
        const user = await UserService.createUser(userInfo);

        // Generate a token based on user's id
        return await authenticate(user._id);
    }

}

module.exports = buildSignUp;