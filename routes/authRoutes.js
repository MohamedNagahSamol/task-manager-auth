const express = require("express");
const router = express.Router();
const controller = require("../controllres/authcontroller")
const { check, validationResult } = require("express-validator");
//const { check, validationResult } = require("express-validator");
router.post(
    '/signup',
      [
    check("email", "Please provide a valid email").isEmail(),
    check(
      "password",
      "Password must be at least 8 characters with 1 upper case letter and 1 number"
    ).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
  ],
  controller.post_signup
)
router.post('/login',controller.post_login)
module.exports= router
