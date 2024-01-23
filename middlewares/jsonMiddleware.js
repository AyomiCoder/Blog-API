module.exports = (req, res, next) => {
    // Set the Content-Type header to application/json
    res.setHeader('Content-Type', 'application/json');
    
    // Override the send method to ensure that the response is always JSON
    res.sendJson = (data) => res.send(JSON.stringify(data, null, 2));
  
    // Continue to the next middleware or route handler
    next();
  };
  