function buildIsAuthenticated({ getUserIdFromAuthToken }){
    return async function isAuthenticated({ header, realRequestObj }){
        try {
            const token = header.Authorization;
            if(!token) throw new Error();

            const userId = await getUserIdFromAuthToken(token);

            realRequestObj.userId = userId;
            return;
        } catch (e){
            return {
                body: { error: "Please authenticate!" },
                statusCode: 401
            }
        }
    }
}

module.exports = buildIsAuthenticated;