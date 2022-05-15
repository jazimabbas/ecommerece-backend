const itemService = require("../../../services/mogno/item");

exports.allItems = async function () {
  const items = await itemService.listAllItems();
  return { data: JSON.stringify(items) };
};

exports.singleItem = async function (itemPayload) {
  const item = await itemService.singleItem(itemPayload.id);
  return { data: JSON.stringify(item) };
};

exports.createItem = async function (itemPayload) {
  const itemFields = itemPayload.item;
  const item = await itemService.createNewitem(itemFields);
  return { message: "create item", data: JSON.stringify(item) };
};

exports.updateItem = async function (itemPayload) {
  const id = itemPayload.id;
  const itemFields = itemPayload.item;
  await itemService.updateItem(id, itemFields);
  return { message: "Item successfully updated" };
};

exports.deleteItem = async function (itemPayload) {
  await itemService.deleteItem(itemPayload.id);
  return { message: "Successfully deleted item" };
};
