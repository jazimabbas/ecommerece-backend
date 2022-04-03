const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  name: String,
  image: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
