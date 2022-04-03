const db = require("../../db");

async function listAllItems() {
  return db.Item.find();
}

async function filteredItems(filterOptions) {
  console.log("filter ops: ", filterOptions);
  const { isOutOfStock, priceRange, sort, searchVal } = filterOptions;

  let excludeStockQuery = "";
  if (isOutOfStock) {
    excludeStockQuery = " and quantity <> 0";
  }

  let sortQuery = "";
  if (sort) {
    let { sortOrder, sortKey } = sort;
    sortOrder = sortOrder ?? "asc";
    if (sortOrder) {
      sortQuery = " order by " + sortKey + " " + sortOrder;
    }
  }

  let priceRangeQuery = "";
  if (priceRange) {
    const { min, max } = priceRange;
    if (!max || max > 0) {
      priceRangeQuery = `and (price >= ${min === 0 ? 1 : min})`;
    } else {
      priceRangeQuery = ` and  (price between ${
        min === 0 ? 1 : min
      } and ${max})`;
    }
  }

  const nameQuery = { name: { $regex: ".*" + searchVal + ".*" } };
  return db.Item.find({ ...nameQuery }).select("name price quantity featuredImage");

  return await db.sequelize.query(
    `
    SELECT 
      id,
      name,
      price,
      quantity,
      featured_image
    FROM items
    WHERE name like '%${searchVal}%'
    ${priceRangeQuery}
    ${excludeStockQuery}
    ${sortQuery}
  `,
    { type: QueryTypes.SELECT }
  );
}

async function singleItem(itemId) {
  //   return db.Item.findByPk(itemId, {
  //     include: [{ model: db.Shop }, { model: db.ItemImage }],
  //   });
  return db.Item.findById(itemId).populate("shopId");
}

async function createNewitem(itemFields) {
  try {
    let newItem = new db.Item({ ...itemFields });
    newItem = await newItem.save();

    // const item = await db.Item.findByPk(newItem.id, {
    //   include: db.ItemCategory,
    // });
    const item = await db.Item.findById(newItem._id).populate("categoryId");
    return item;
  } catch (err) {
    console.log("error: ", err);
  }
}

async function updateItem(id, itemFields) {
  //   await db.Item.update(itemFields, { where: { id } });
  await db.Item.findByIdAndUpdate(id, { $set: { ...itemFields } });
}

module.exports = {
  listAllItems,
  filteredItems,
  singleItem,
  createNewitem,
  updateItem,
};
