const express = require("express");
const userController = require("../controllers/user");
const uploads = require("../utils/upload");

const router = express();
router.patch(
  "/profile",
  uploads.single("profile"),
  userController.updateProfile
);

module.exports = router;
