const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function createNewitem(itemFields) {
  const newItem = new db.Item({ ...itemFields });
  return await newItem.save();
}

module.exports = { createNewitem };
