const validate = require("../utils/validations");
const validations = require("../utils/validations/shop");

async function checkShopAvailablity(req, res) {
  const cleanFields = await validate(
    validations.checkAvailablitySchema,
    req.body
  );
  res.send({ cleanFields });
}

module.exports = { checkShopAvailablity };
