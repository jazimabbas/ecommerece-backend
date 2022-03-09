const validate = require("../utils/validations");
const validations = require("../utils/validations/checkout");
const checkoutService = require("../services/checkout");

async function checkout(req, res) {
  const cleanFields = await validate(validations.checkoutSchema, req.body);
  const items = await checkoutService.checkout(cleanFields.items);
  // res.send(cleanFields);
  res.send(items);
}

module.exports = { checkout };
