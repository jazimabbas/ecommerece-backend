class HttpException extends Error {
  statusCode;

  constructor(message, code, name) {
    super(message);
    this.name = name || "Server_Error";
    this.statusCode = code || 500;
  }
}

class BadRequestException extends HttpException {
  statusCode = 400;
  name = "Bad_Request";

  constructor(message = "Bad Request") {
    super(message);
  }
}

class UnauthorizedException extends HttpException {
  statusCode = 401;
  name = "Unauthorized";

  constructor(message = "Not Authorized") {
    super(message);
  }
}

class ForbiddenException extends HttpException {
  statusCode = 403;
  name = "Forbidden";

  constructor(message = "Forbidden") {
    super(message);
  }
}

class NotFoundException extends HttpException {
  statusCode = 404;
  name = "Not_FOUND";

  constructor(message = "Not Found") {
    super(message);
  }
}

class ValidationException extends HttpException {
  statusCode = 422;
  name = "Validation";
  errors;

  constructor(message = "Validation Failed", errors = []) {
    super(message);

    this.errors = errors;
  }
}

module.exports = {
  HttpException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  ValidationException,
};
