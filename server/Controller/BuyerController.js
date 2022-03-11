const ProductDetail = require("../schema/ProductDetailSchema");
const Buyer = require("../schema/BuyerSchema");
const jwt = require("jsonwebtoken");

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
exports.ProductDetail = async (req, res) => {
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
exports.BuyerInfo = async (req, res) => {
  try {
    const data = await Buyer.findById(req.params.buyerId);
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
exports.BuyerRegister = async (req, res) => {
  const { name, email, password, companyName, companyAddress } = req.body;

  try {
    const existingUser = await Buyer.findOne({ email });
    console.log(existingUser);
    if (existingUser !== null) {
      console.log("12");
      return res.status(400).json({ message: "User already exists." });
    }
    // maxQuantity*no of self help group
    const data = await Buyer.create({
      name,
      email,
      password,
      companyName,
      companyAddress,
    });
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

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Buyer.findOne({ email });
    if (!existingUser)
      return res.status(400).json({ message: "User donot exist.", status: 1 });

    if (password !== existingUser.password)
      return res
        .status(400)
        .json({ message: "Invalid password or Email", status: 1 });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({
      result: existingUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "SomeThing went wrong." });
  }
};

// exports.B2CProductDetail = async (req, res) => {
//   try {
//     // minQuantity
//     const data = await ProductDetail.findById(req.params.productId).select(
//       "productName price minQuantity"
//     );
//     // console.log(data, "data");
//     res.status(200).json({ data: data, msg: "successful get" });
//   } catch (err) {
//     console.log(err);
//     res.status(409).json({
//       status: "Failure in  get",

//       // res.send(userMap);
//     });
//   }
// };
