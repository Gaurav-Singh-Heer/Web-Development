const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/signup", authController.getSignupPage);
router.post("/signup", authController.signup);
router.post("/verify", authController.verifyOTP);

module.exports = router;
