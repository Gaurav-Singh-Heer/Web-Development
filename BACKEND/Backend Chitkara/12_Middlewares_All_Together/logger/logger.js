// Application-level middleware to log request time
module.exports = (req, res, next) => {
    console.log(`Request received at: ${new Date().toISOString()}`)
    next()  // Pass control to the next middleware
}
