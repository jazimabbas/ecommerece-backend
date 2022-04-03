const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  quantity: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ItemCategory",
  },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
  salesCount: String,
  featuredImage: String,
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
