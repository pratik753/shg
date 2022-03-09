const jwt = require("jsonwebtoken");
exports.auth = async (req, res, next) => {
  console.log("hii Auth");
  try {
    //console.log(req.headers.authorization);
    if (req.headers.authorization === undefined) {
      next();
    }
    const token = req.headers.authorization?.split(" ")[1];

    let decodedData;
    decodedData = jwt.verify(token, "test");

    console.log(decodedData);
    req.useId = decodedData?.id;
    // var dateNow = new Date();

    // if(decodedToken.exp < dateNow.getTime())
    // console.log(req.useId + "hii");
    console.log(req.useId);
    next();
  } catch (error) {
    //res.status(200).json({ data: "1" });
    next();
    console.log(error);
  }
};
// export default auth;
