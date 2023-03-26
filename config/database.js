const mongose = require("mongoose");
const { variable } = require("./variable");

const databaseInit = () => {
  mongose
    .connect(variable.mongoConnectUrl, {
      dbName: "shopData",
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("database connected");
    })
    .catch(e => {
      console.log("Something went wrong", e);
    });
};
module.exports = databaseInit;
