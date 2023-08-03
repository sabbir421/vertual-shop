const { generateDescription } = require("./controller/mocController/chatGPT");
const { signup } = require("./controller/userController/userController");
const { doesExists } = require("./model/userModel/userModel");

const router = require("express").Router();

router.get("/health", (req, res) => {
  res.send("shehab you can do it");
});
// user route///
router.post("/signup", signup);
router.post("/description", generateDescription);
module.exports = router;
