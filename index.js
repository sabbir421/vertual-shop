const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const { variable } = require("./config/variable");
const databaseInit = require("./config/database");
const router = require("./router");
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
databaseInit();
app.listen(variable.port, () => {
  console.log(`API server listening on port ${variable.port}`);
});
