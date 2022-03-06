const express = require("express");
const userController = require("../controllers/user");
const uploads = require("../utils/upload");
const isAuth = require("../middlewares/is-auth");

const router = express();
router.patch(
  "/profile",
  isAuth,
  uploads.single("profile"),
  userController.updateProfile
);

module.exports = router;
