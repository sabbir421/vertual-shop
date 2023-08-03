require("dotenv").config();
const mongoConnectUrl = process.env.MONGO_CONNECTION_STRING;
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET_KEY;
const apiURL = "https://api.openai.com/v1/chat/completions";
// const apiURL = "https://api.openai.com/v1/engines/davinci/completions";
const apiKey = process.env.CHATGPT_API_KEY;
exports.variable = {
  mongoConnectUrl,
  port,
  jwtSecret,
  apiKey,
  apiURL,
};
