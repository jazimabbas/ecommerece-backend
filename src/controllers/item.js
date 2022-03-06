const validate = require("../utils/validations");
const validations = require("../utils/validations/item");
const itemService = require("../services/item");

async function createItem(req, res) {
  console.log("files: ", req.files);

  const cleanFields = await validate(validations.createItemSchema, req.body);

  // return res.send(cleanFields);

  // return res.send(cleanFields);
  const images = req.files.map((file) => file.filename);
  const item = await itemService.createNewitem({ ...cleanFields, images });
  res.send({ item });
}

module.exports = { createItem };
