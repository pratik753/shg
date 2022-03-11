const express = require("express");
const route = express.Router();

const user = require("../Controller/UserController");
const Buyer = require("../Controller/BuyerController");
route.post("/login", Buyer.login);
route.post("/register", Buyer.BuyerRegister);
route.get("/BuyerInfo/:buyerId", Buyer.BuyerInfo);
route.get("/home", Buyer.HomeProductName);
route.get("/home/productDetail/:productId", Buyer.ProductDetail);
// route.get("/home/b2c/:productId", Buyer.B2CProductDetail);

module.exports = route;
