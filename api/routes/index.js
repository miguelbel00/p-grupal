const express = require('express')
const userRoutes = require("./UserRoutes");
const productCreateRoutes = require("./productRoutes");

const router = express.Router();


router.use("/user", userRoutes);
router.use("/products", productCreateRoutes);


module.exports = router