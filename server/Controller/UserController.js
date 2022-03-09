const UserSchema = require("../schema/UseSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  //   console.log(req);
  // console.log(req.body);
  const { email, password, confirmPassword, Fname, Lname, role } = req.body;
  try {
    const existingUser = await UserSchema.findOne({ email });
    console.log(existingUser);
    if (existingUser !== null) {
      console.log("12");
      return res.status(400).json({ message: "User already exists." });
    }
    // if (password != confirmPassword) {
    //   console.log("44");
    //   return res.status(400).json({ message: "Password Not match." });
    // }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserSchema.create({
      email,
      password: hashedPassword,
      name: `${Fname} ${Lname}`,
      role: role,
    });
    console.log(result);
    const token = jwt.sign(
      { email: result.email, id: result._id, role: result.role },
      "test",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.login = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const existingUser = await UserSchema.findOne({ email });
    if (!existingUser)
      return res.status(400).json({ message: "User donot exist.", status: 1 });

    if (existingUser.role !== role)
      return res.status(400).json({ message: "Role Not match", status: 1 });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: "Invalid password or Email", status: 1 });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        role: existingUser.role,
      },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({
      result: existingUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "SomeThing went wrong." });
  }
};
