const { check } = require("express-validator");

//name, email, password, date of birth validation for Register
exports.userRegistrationValidator = [
    check("name")
        .trim()
        .notEmpty()
        .withMessage("Name is missingg")
        .isLength({ min: 5 })
        .withMessage("name must have at least 5 character")
        .isLength({ max: 31 })
        .withMessage("name can have maximum 31 characters"),

    //input validation for Email
    check("email")
        .trim()
        .notEmpty()
        .withMessage("Email is missingg")
        .isEmail()
        .withMessage("Not a valid Email"),

    //input validation for Password
    check("password")
        .trim()
        .notEmpty()
        .withMessage("Password is missingg")
        .isLength({ min: 8 })
        .withMessage("Password must have at least 8 character"),

    //input validation for Date of birth
    check("dob")
        .trim()
        .notEmpty()
        .withMessage("date of birth is missingg")
        .isISO8601()
        .toDate()
        .withMessage("Not a Valid Date")
]

//email, password validation for Login
exports.userLoginValidator = [

    //input validation for Email
    check("email")
        .trim()
        .notEmpty()
        .withMessage("Email is missingg")
        .isEmail()
        .withMessage("Not a valid Email"),

    //input validation for Password
    check("password")
        .trim()
        .notEmpty()
        .withMessage("Password is missingg")
        .isLength({ min: 8 })
        .withMessage("Password must have at least 8 character")
]