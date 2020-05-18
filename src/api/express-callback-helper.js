function makeExpressCallback (controller) {
    // A function who needs a controller for dealling with req obj
    return function expressCallback (req, res, next){
        // Map the req obj to meet the controller's needs
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent'),
                // Authorization will save the token for later use
                'Authorization': req.get('Authorization') ? req.get('Authorization').replace("Bearer", ""): null
            }
        }
        // Let the controller deals with reqObj then respond with controller's returned value
        controller(httpRequest)
            .then(httpResponse => {
                // If got not response from the controller, the act like a middleware
                if(!httpResponse) return next();

                // If got some headers, set it up in the response obj
                if (httpResponse.headers) {
                    res.set(httpResponse.headers)
                }
                
                // Send a json response with statucode and body
                res.status(httpResponse.statusCode).json(httpResponse.body)
            }) // Any possible error is server's fault
            .catch(e => res.status(500).send({ error: 'An unkown error occurred.' }))
    }
}

module.exports = makeExpressCallback;