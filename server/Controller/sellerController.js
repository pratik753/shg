const Seller = require("../schema/SellerSchema");
exports.postData = async (req, res) => {
  const posts = req.body;
  console.log(posts);
  try {
    const result = await Seller.create({
      sghname: req.body.sghname,
      sghfoundername: req.body.sghfoundername,
      sghaddress: req.body.sghaddress,
      productdetails: req.body.productdetails,
      accountno: req.body.accountno,
      bankname: req.body.bankname,
      ifsccode: req.body.ifsccode,
      branch: req.body.branch,
    });
    console.log(result);
    res.status(200).json({ data: "successful IAnsertion" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",
    });
  }
};
