const ProductDetail = require("../schema/ProductDetailSchema");
exports.HomeProductName = async (req, res) => {
  try {
    const data = await ProductDetail.find().select("productName price");
    // console.log(data, "data");
    res.status(200).json({ data: data, msg: "successful get" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",

      // res.send(userMap);
    });
  }
};
exports.B2BProductDetail = async (req, res) => {
  try {
    // maxQuantity*no of self help group
    const data = await ProductDetail.findById(req.params.productId).select(
      "productName price maxQuantity"
    );
    // console.log(data, "data");
    res.status(200).json({ data: data, msg: "successful get" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",

      // res.send(userMap);
    });
  }
};
exports.B2CProductDetail = async (req, res) => {
  try {
    // minQuantity
    const data = await ProductDetail.findById(req.params.productId).select(
      "productName price minQuantity"
    );
    // console.log(data, "data");
    res.status(200).json({ data: data, msg: "successful get" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  get",

      // res.send(userMap);
    });
  }
};
