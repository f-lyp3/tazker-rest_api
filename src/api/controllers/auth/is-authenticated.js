function buildIsAuthenticated({ getUserIdFromAuthToken }){
    return async function isAuthenticated({ headers, realRequestObj }){
        try {
            // Get token from mock request header.Authorization
            // and remove edges whitespaces
            const token = headers.Authorization.trim();
            if(!token) throw new Error();

            // Verify token, if valid return a user id
            const userId = await getUserIdFromAuthToken(token);
            // Set the user identity in the real request
            realRequestObj.userId = userId;
            return; // Return undefined, so it's treated as a middleware
        } catch (e){
            return {
                body: { error: "Please authenticate!" },
                statusCode: 401
            }
        }
    }
}

module.exports = buildIsAuthenticated;