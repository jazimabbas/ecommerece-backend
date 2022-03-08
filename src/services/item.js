const { QueryTypes } = require("sequelize");
const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function listAllItems() {
  return db.Item.findAll();
}

async function filteredItems(filterOptions) {
  const { isOutOfStock, priceRange, sort, searchVal } = filterOptions;

  let excludeStockQuery = "";
  if (isOutOfStock) {
    excludeStockQuery = " and quantity <> 0";
  }

  let sortQuery = "";
  if (sort) {
    let { sortOrder, sortKey } = sort;
    sortOrder = sortOrder ?? "asc";
    sortQuery = " order by " + sortKey + " " + sortOrder;
  }

  let priceRangeQuery = "";
  if (priceRange) {
    const { min, max } = priceRange;
    priceRangeQuery = ` and  (price between ${min ?? 1} and ${max})`;
  }

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
  return db.Item.findByPk(itemId, {
    include: [{ model: db.Shop }, { model: db.ItemImage }],
  });
}

async function createNewitem(itemFields) {
  const trans = await db.sequelize.transaction();

  try {
    let newItem = new db.Item({ ...itemFields });
    newItem = await newItem.save();

    const itemImages = itemFields.images.map((image) => {
      return { image, itemId: newItem.id };
    });
    await db.ItemImage.bulkCreate(itemImages, { returning: true });

    await trans.commit();
    return db.Item.findByPk(newItem.id, { include: db.ItemCategory });
  } catch (err) {
    await trans.rollback();
  }
}

module.exports = { listAllItems, filteredItems, singleItem, createNewitem };
