const Seller = require("../schema/SellerSchema");
exports.postData = async (req, res) => {
  const posts = req.body;
  console.log(posts);
  try {
    const result = await Seller.create({sghname:req.body.sghname,sghfoundername:req.body.sghfoundername,sghaddress:req.body.sghaddress, productdetails:req.body.productdetails,
      accountno:req.body.accountno,bankname:req.body.bankname,ifsccode:req.body.ifsccode,branch:req.body.branch 
    });
    console.log(result);
    // res.status(200).json({ data: "successful IAnsertion" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",
    });
  }
};

exports.busAdd = async (req, res) => {
  try {
    // const { useId } = req.body;
    console.log(req.useId);
    if (req.useId === undefined) {
      res.status(200).json({ message: "Not auth", status: 1 });
    }
    console.log(req.body);
    res.status(200).json({ message: "bus add auth", status: 0 });
  } catch (error) {
    console.log(error);
  }
};
