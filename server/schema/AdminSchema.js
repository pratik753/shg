const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  sellerTest: {
    type: Boolean,
    default: false,
    required: true,
  },
  productAdd: {
    type: Array,
    required: true,
  },
  sghaddress: {
    type: String,
    required: true,
  },
  productdetails: {
    type: [String],
    required: true,
  },
  accountno: {
    type: String,
    required: true,
  },
  bankname: {
    type: String,
    required: true,
  },
  ifsccode: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
