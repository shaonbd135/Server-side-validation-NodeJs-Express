const express = require("express");
const userRouter = require("./routes/user.route");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);

app.get("/", (req, res) => {
    res.status(200).send("Server is running Well");
})



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})