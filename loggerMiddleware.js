// Middleware function to log requests
const loggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware or route handler
};

module.exports = loggerMiddleware;