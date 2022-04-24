const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const db = require("../../db");
const Exceptions = require("../../utils/custom-exceptions");

async function checkout(userId, items) {
  const itemsInDb = await db.Item.find({
    id: { $in: items.map((item) => item.itemId) },
  });

  const itemsInDbObj = {};
  itemsInDb.forEach((item) => {
    itemsInDbObj[item._id] = item;
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

  try {
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
        isGift: item.isGift ?? false,
        description: item.description ?? "",
      };
    });

    for (let i = 0; i < purchases.length; i++) {
      await db.Purchase.create(purchases[i]);
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemInDb = itemsInDbObj[item.itemId];

      await db.Item.findOneAndUpdate(
        { _id: item.itemId },
        {
          $set: {
            quantity: itemInDb.quantity - item.quantity,
            salesCount: itemInDb.salesCount + item.quantity,
          },
        }
      );
    }
  } catch (err) {
    console.log("error: ", err);
    throw new Exceptions.BadRequestException("Error while doing a checkout");
  }
}

module.exports = { checkout };
