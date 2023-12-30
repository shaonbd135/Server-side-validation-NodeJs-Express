const registerUser = async (req, res) => {
    try {
        const { name, email, password, dob } = req.body;
        const newUser = {
            name,
            email,
            password,
            dob
        }
        res.status(201).json({
            message: "user was created",
            newUser
        })
    }
    catch (error) {
        console.log(error.message)
    }
};

const loginUser = (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === "sample@sample.com" && password === "12345678") {
            res.status(200).json({
                message: "user is logged in",
            })
        }
        else {
            res.status(400).json({
                message: "Email or Password didn't match"
            })
        }
    }
    catch (error) {
        console.log(error.message)
    }
}


module.exports = {registerUser, loginUser}