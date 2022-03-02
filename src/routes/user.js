const express = require("express");
const userController = require("../controllers/user")

const router = express();
router.patch("/profile", userController.updateProfile)

module.exports = router;
