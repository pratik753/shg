const express = require("express");
const route = express.Router();
const seller = require("../Controller/sellerController");
const admin = require("../Controller/AdminController");
const authM = require("../middleware/auth");
route.post("/postdata", seller.postData);
route.post("/addProduct", admin.ProductDetailData);
route.get("/productNameData", admin.ProductNameData);
// route.post("/busAdd", authM.auth, bus.busAdd);

module.exports = route;
