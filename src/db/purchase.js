const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  itemName: String,
  itemImage: String,
  itemQuantity: String,
  itemPrice: Number,
  orderId: String,
  purchasedDate: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
  isGift: {
    type: Boolean,
    default: false,
  },
  description: String,
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
