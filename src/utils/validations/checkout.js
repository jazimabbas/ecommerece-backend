const yup = require("yup");

const checkoutSchema = yup.object().shape({
  items: yup
    .array()
    .min(1)
    .of(
      yup.object().shape({
        itemId: yup.number().required(),
        quantity: yup.number().required(),
      })
    )
    .required(),
});

module.exports = { checkoutSchema };
