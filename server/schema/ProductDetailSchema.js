const mongoose = require("mongoose");

const ProductDetailSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  minQuantity: {
    type: Number,
    required: true,
  },
  maxQuantity: {
    type: Number,
    required: true,
  },
  requirement: {
    type: Array,
  },
});

const ProductDetail = mongoose.model("ProductDetail", ProductDetailSchema);
module.exports = ProductDetail;
