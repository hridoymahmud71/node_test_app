const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const token = authorization.split(" ")[1]; // remove "Bearer"
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId } = decoded;

    req.username = username;
    req.userId = userId;
    next();
  } catch (err) {
    return res.status(401).json({
      error: "User is unauthenticated",
    });
  }
};

module.exports = isAuthenticated;
