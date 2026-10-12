const express = require("express");

const router = express.Router();

const { register,login ,profile} = require("../controllers/userController");

const {registerValidation,loginValidation} = require("../validations/userValidation");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
    "/register",
    registerValidation,
    register
);

router.post(
    "/login",
    loginValidation,
    login
);

router.get(

    "/profile",

    authMiddleware,

    profile

);

module.exports = router;