const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  itemId: {
    type: mongoose.Types.ObjectId,
    ref: "Item",
  },
});

const Favorite = mongoose.model("Favorite", favSchema);
module.exports = Favorite;
