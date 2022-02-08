const config = require('config');
const jwt = require('jsonwebtoken');

// Middleware function
const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  // Check token
  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied. No token' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Add user from payload
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: 'Invalid Token' });
  }
};

module.exports = auth;
