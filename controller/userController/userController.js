const { variable } = require("../../config/variable");
const { createUser, doesExists } = require("../../model/userModel/userModel");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  try {
    const { userName, email, password, confirmPass } = req.body;
    if (!userName || !email || !password || !confirmPass) {
      return res.status(400).send("invalid Creadentials");
    }
    const userExits = await doesExists(email);
    if (userExits) {
      return res.status(400).send("Email already Exists.");
    }
    const user = await createUser({
      userName,
      email,
      password,
      confirmPass,
    });
    const token = jwt.sign(
      { userId: user._id, userName, email },
      variable.jwtSecret,
      {
        expiresIn: "180d",
      }
    );
    console.log("=============", token);
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
};
