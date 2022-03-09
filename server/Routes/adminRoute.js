const express = require("express");
const route = express.Router();
const bus = require("../Controller/sellerController");
const authM = require("../middleware/auth");
route.post("/postdata", bus.postData);
route.post("/busAdd", authM.auth, bus.busAdd);

module.exports = route;
