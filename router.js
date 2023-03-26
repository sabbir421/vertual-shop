const { signup } = require("./controller/userController/userController");

const router = require("express").Router();

router.get("/health", (req, res) => {
  res.send("shehab you can do it");
});
//// user route///
// router.post("/signup", signup);
module.exports = router;
