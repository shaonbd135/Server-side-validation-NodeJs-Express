const express = require("express");
const { runValidation } = require("../validation/auth");
const { registerUser, loginUser } = require("../controllers/user");
const { userRegistrationValidator, userLoginValidator } = require("../validation/user.auth");

const userRouter = express.Router();


userRouter.post("/register", userRegistrationValidator, runValidation, registerUser)

userRouter.post("/login", userLoginValidator, runValidation, loginUser)


module.exports = userRouter;