const express = require("express");
const route = express.Router();
const seller=require("../Controller/sellerController");
const authM = require("../middleware/auth");
route.post("/postdata", seller.postData);
//route.post("/busAdd", authM.auth, bus.busAdd);
module.exports = route;
