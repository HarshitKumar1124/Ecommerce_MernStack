const express = require('express')

const router = express.Router();

const {RegisterUser,LoginUser,LogOutUser, forgotPassword,resetPassword} = require('../controller/UserController');



//Registering User
router.route("/register_user").post(RegisterUser);


//Login User
router.route("/login_user").post(LoginUser)


//LogOut User
router.route("/logout_user").get(LogOutUser)


//forgot Password
router.route("/password/forget").post(forgotPassword)

//ResetPassword
router.route("/password/forget/:token").put(resetPassword)

module.exports =  router;