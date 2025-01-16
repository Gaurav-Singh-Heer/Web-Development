const { validateToken } = require("../27_services/authentication");

function checkForAuthenticationCookie(cookieName){    // Generic Middleware that will check token in every request/response
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName]
        
        if(!tokenCookieValue){          // If No tokenCookieValue that means that there is no user so , call next function
            return next();
        }
        /*  this must be in Try catch (because if token is not valid then it will throw error)
        const userPayload = validateToken(tokenCookieValue)            // If token is present then we will validate it  // validateToken is in services/authentication
        */

        /*
        try {
            const userPayload = validateToken(tokenCookieValue)            // If token is present then we will validate it  // validateToken is in services/authentication
            req.user = userPayload;
            next();
        } catch (error) {}                                // if throws error then also will call next()
        next();  */  // OR
        
        try {
            const userPayload = validateToken (tokenCookieValue)           // If token is present then we will validate it  // validateToken is in services/authentication
            req.user = userPayload;
        } catch (error) {}                                // if throws error then also will call next()
        return next();
        // OR Token is present, try validating
        /*try {
            const userPayload = validateToken(tokenCookieValue);  // Validate token

            // If validation is successful, attach the user payload to the request object
            req.user = userPayload;

            // Continue to the next middleware or route handler
            return next();
        } catch (error) {
            // If token validation fails, you might want to handle the error.
            // For example, clear the cookie and redirect to login/signin page
            res.clearCookie(cookieName);  // Clear invalid token cookie
            return res.redirect("/user/signin");  // Redirect to signin page
        }*/
    };
}

module.exports = {
    checkForAuthenticationCookie,   
};