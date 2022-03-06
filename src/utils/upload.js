const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");
const Exceptions = require("./custom-exceptions");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const filename = uuidv4() + "-" + file.originalname;
    cb(null, filename);
  },
});

const fileFilter = async (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    throw new Exceptions.ValidationException(
      file.mimetype + " is not supported"
    );
  }
};

const uploads = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = uploads;
