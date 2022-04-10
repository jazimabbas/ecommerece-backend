const db = require("../../db");

async function listAllItems() {
  return db.Item.find();
}

async function filteredItems(filterOptions) {
  console.log("filter ops: ", filterOptions);
  const { isOutOfStock, priceRange, sort, searchVal } = filterOptions;

  const nameQuery = { name: { $regex: ".*" + searchVal + ".*" } };
  let priceQuery = {};
  if (priceRange) {
    const { min, max } = priceRange;
    if (!max) {
      priceQuery = { price: { $gte: min ?? 1 } };
    } else {
      priceQuery = { price: { $gte: min ?? 1, $lte: max } };
    }
  }
  let stockQuery = {};
  if (isOutOfStock) {
    stockQuery = { quantity: { $ne: 0 } };
  }

  const filteredItems = db.Item.find({
    ...nameQuery,
    ...priceQuery,
    ...stockQuery,
  }).select("name price quantity featuredImage");

  if (sort && sort.sortKey) {
    console.log("sort key present");
    let { sortKey, sortOrder } = sort;
    sortOrder = sortOrder ?? "asc";

    filteredItems.sort({ [sortKey]: sortOrder === "asc" ? 1 : -1 });
  }

  return filteredItems;
}

async function singleItem(itemId) {
  return db.Item.findById(itemId).populate("shopId");
}

async function createNewitem(itemFields) {
  try {
    let newItem = new db.Item({ ...itemFields });
    newItem = await newItem.save();

    const item = await db.Item.findById(newItem._id).populate("categoryId");
    return item;
  } catch (err) {
    console.log("error: ", err);
  }
}

async function updateItem(id, itemFields) {
  await db.Item.findByIdAndUpdate(id, { $set: { ...itemFields } });
}

async function deleteItem(id) {
  await db.Item.findByIdAndDelete(id);
}

module.exports = {
  listAllItems,
  filteredItems,
  singleItem,
  createNewitem,
  updateItem,
  deleteItem,
};
