function buildSignIn({ authenticate, isMatch, UserService }){
    return async function signIn({ email, password}) {
        // Find user matching the given email
        const foundUser = await UserService.findUserByEmail({ email });

        // If there isn't a user
        if(!foundUser) throw new Error("Invalid email or password!");
        
        // Check if the given password matches the user's password
        const passwordMatched = await isMatch(password, foundUser.password);
        if(!passwordMatched) throw new Error("Invalid email or password!");
        
        // Generate a token based on user's id
        return await authenticate(foundUser._id);
    }
}

module.exports = buildSignIn;