const itemService = require("../../../services/mogno/item");
const Exceptions = require("../../../utils/custom-exceptions");
const uploadToS3 = require("../../../utils/aws/graphql-upload-to-s3");

exports.allItems = async function () {
  const items = await itemService.listAllItems();
  return { data: JSON.stringify(items) };
};

exports.singleItem = async function (itemPayload) {
  const item = await itemService.singleItem(itemPayload.id);
  return { data: JSON.stringify(item) };
};

exports.createItem = async function (itemPayload) {
  if (!itemPayload.featured) {
    throw new Exceptions.BadRequestException("Please upload featured image");
  }

  const { createReadStream, filename } = await itemPayload.featured.file;
  const stream = createReadStream();
  const s3Object = await uploadToS3({ stream, filename });
  const featuredImage = s3Object.Location;

  const itemFields = itemPayload.item;
  const item = await itemService.createNewitem({
    ...itemFields,
    featuredImage,
  });
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
