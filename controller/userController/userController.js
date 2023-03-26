const { createUser, doesExists } = require("../../model/userModel/userModel");

exports.signup = async (req, res) => {
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
    confirmPass
  });
  res.status(200).send({ message: "signup success", id: user._id });
};
