const { Op } = require("sequelize");
const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function checkout(items) {
  const itemsInDb = await db.Item.findAll({
    where: { id: { [Op.in]: items.map((item) => item.itemId) } },
  });

  const itemsInDbObj = {};
  itemsInDb.forEach((item) => {
    itemsInDbObj[item.id] = item;
  });

  const errors = [];
  items.forEach((item) => {
    if (!itemsInDbObj[item.itemId]) {
      errors.push(`Item with item_id: ${item.itemId} is not found`);
    }
  });
  if (errors.length > 0) {
    throw new Exceptions.ValidationException("Items not found", errors);
  }

  return itemsInDb;
}

module.exports = { checkout };
