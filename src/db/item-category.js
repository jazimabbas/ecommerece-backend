const mongoose = require("mongoose");

const itemCategorySchema = new mongoose.Schema({
  name: String,
  shopId: {
    type: mongoose.Types.ObjectId,
    ref: "Shop",
  },
});

const ItemCategory = mongoose.model("ItemCategory", itemCategorySchema);
