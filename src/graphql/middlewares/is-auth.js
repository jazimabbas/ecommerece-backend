const jwt = require("jsonwebtoken");
const config = require("config");
const { skip } = require("graphql-resolvers");
const Exceptions = require("../../utils/custom-exceptions");

function isAuth(parent, args, context) {
  const headers = args.headers;
  const token = headers["x-auth-token"] || headers["authorization"];
  if (!token) throw new Exceptions.BadRequestException("No token provided");
  try {
    const decoded = jwt.verify(token, config.get("jwt.secret"));
    args._auth = decoded;
    skip;
  } catch (ex) {
    throw new Exceptions.BadRequestException("Invalid token");
  }
}

module.exports = isAuth;
