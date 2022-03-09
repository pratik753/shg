const ProductDetail = require("../schema/ProductDetailSchema");
exports.ProductDetailData = async (req, res) => {
  const posts = req.body;

  console.log(posts);
  try {
    const result = await ProductDetail.create({
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      price: req.body.price,
      minQuantity: req.body.minQuantity,
      maxQuantity: req.body.maxQuantity,
      requirement: req.body?.requirement,
      // requirement: req.body?.requirement.checkRequirement,
    });
    console.log(result);
    res.status(200).json({ data: "successful Insertion" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",
    });
  }
};
exports.ProductNameData = async (req, res) => {
  try {
    const data = await ProductDetail.find().select("productName");
    console.log(data, "data");
    res.status(200).json({ data: data, msg: "successful get" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",

      // res.send(userMap);
    });
  }
};
exports.ProductDetailData = async (req, res) => {
  try {
    const data = await ProductDetail.find();
    console.log(data, "data");
    res.status(200).json({ data: data, msg: "successful get" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",

      // res.send(userMap);
    });
  }
};
