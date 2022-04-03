const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
