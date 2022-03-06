const db = require("../models");
const Exceptions = require("../utils/custom-exceptions");

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
  } catch (err) {
    await trans.rollback();
  }
}

module.exports = { createNewitem };
