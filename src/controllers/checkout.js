const validate = require("../utils/validations");
const validations = require("../utils/validations/checkout");
const checkoutService = require("../services/checkout");

async function checkout(req, res) {
  const cleanFields = await validate(validations.checkoutSchema, req.body);
  await checkoutService.checkout(+req.user.id, cleanFields.items);
  // res.send(cleanFields);
  res.send({ message: "Successfully added to orders" });
}

module.exports = { checkout };
