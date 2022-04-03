const mongoose = require("mongoose");
const config = require("config");

module.exports = async () => {
  const dbConnString = config.get("mongoDB.connString");

  try {
    const connection = await mongoose.connect(dbConnString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (err) {
    throw err;
  }
};
