const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

// .env file configuration
dotenv.config();

// Connecting the MongoDB database
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to database!")
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
// Create api routes for different routes created
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Create a port number to listen
app.listen(process.env.PORT || 5500, () => {
    console.log("Backend server is running!");
});