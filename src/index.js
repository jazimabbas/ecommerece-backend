const express = require("express");
const allRoutes = require("./routes");

const app = express();
app.use("/", allRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is listening on the port ${PORT}...`);
});
