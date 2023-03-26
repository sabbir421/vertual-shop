require("dotenv").config();
const mongoConnectUrl = process.env.MONGO_CONNECTION_STRING;
const port = process.env.PORT;
exports.variable = {
  mongoConnectUrl,
  port
};
