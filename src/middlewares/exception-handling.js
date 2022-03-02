const fs = require("fs/promises");
const Exceptions = require("../utils/custom-exceptions");

module.exports = async function (err, req, res, next) {
  let statusCode = 500;
  let message = "Server error";
  let name = "Server_Error";
  let errors = [];

  console.log(err);
  await removeFileIfExists(req.file);

  if (err instanceof Exceptions.HttpException) {
    if (err instanceof Exceptions.ValidationException) {
      errors = err.errors;
    }
    statusCode = err.statusCode;
    message = err.message;
    name = err.name;
  }

  res.status(statusCode).send({ message, name, errors });
};

async function removeFileIfExists(file) {
  if (!file) return;

  try {
    await fs.unlink(file.path);
  } catch (_) {}
}
