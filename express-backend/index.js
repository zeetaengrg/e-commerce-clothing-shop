const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to database!")
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});