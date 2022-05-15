const itemService = require("../../../services/mogno/item");

exports.createItem = async function (itemPayload) {
  const itemFields = itemPayload.item;
  const item = await itemService.createNewitem(itemFields);
  return { message: "create item", data: JSON.stringify(item) };
};
