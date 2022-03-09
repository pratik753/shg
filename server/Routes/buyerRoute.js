const express = require("express");
const route = express.Router();

const user = require("../Controller/UserController");
const Buyer = require("../Controller/BuyerController");
route.post("/login", user.login);
route.post("/signup", user.signup);
route.get("/home", Buyer.HomeProductName);
route.get("/home/b2b/:productId", Buyer.B2BProductDetail);
route.get("/home/b2c/:productId", Buyer.B2CProductDetail);

module.exports = route;
