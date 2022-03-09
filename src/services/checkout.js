const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

async function checkout(userId, items) {
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

  items.forEach((item) => {
    if (item.quantity > itemsInDbObj[item.itemId].quantity) {
      errors.push(
        `Quantity for item_name: '${itemsInDbObj[item.itemId].name}' is ${
          itemsInDbObj[item.itemId].quantity
        }. But your provided quantity is: ${item.quantity}`
      );
    }
  });
  if (errors.length > 0) {
    throw new Exceptions.ValidationException("Items Quantity Differs", errors);
  }

  const orderId = uuidv4();
  const purchases = items.map((item) => {
    const itemInDb = itemsInDbObj[item.itemId];

    return {
      userId: userId,
      shopId: itemInDb.shopId,
      itemName: itemInDb.name,
      itemImage: itemInDb.featuredImage,
      itemQuantity: item.quantity,
      itemPrice: itemInDb.price,
      purchasedDate: new Date(),
      orderId,
    };
  });
  await db.Purchase.bulkCreate(purchases);

  //   return { itemsInDb, orderId, purchases };
}

module.exports = { checkout };
