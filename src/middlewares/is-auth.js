const config = require("config");
const jwt = require("jsonwebtoken");
const Exceptions = require("../utils/custom-exceptions");

module.exports = async function (req, res, next) {
  const token = req.headers["x-auth-token"] || req.headers["authorization"];
  if (!token)
    throw new Exceptions.UnauthorizedException("Access denied. No token provided");

  try {
    const decoded = jwt.verify(token, config.get("jwt.secret"));
    req.user = decoded;
    next();
  } catch (err) {
    throw new Exceptions.UnauthorizedException("Invalid token");
  }
};
