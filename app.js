const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/product.route");
const orderRoute = require("./routes/order.route");
const customerRoute = require("./routes/customer.route");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/customers", customerRoute);

app.get("/", (_, res) => {
    res.send("Hello, World");
});

const port = 3000;

mongoose.connect("mongodb://localhost:27017/mongoAPI", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database!");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log("Database connection error: ", error);
    });
