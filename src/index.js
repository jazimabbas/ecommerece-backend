const config = require("config");
const express = require("express");
const db = require("./models");
const allRoutes = require("./routes");

const app = express();
app.use("/", allRoutes);

async function bootstrap() {
  console.log("Please wait for the server and db to run");

  try {
    await db.sequelize.sync({ force: config.get("db.forceSync") });
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`App is listening on the port ${PORT}...`);
    });
  } catch (err) {
    console.log("Some error while bootstrap the app ...", err);
  }
}

bootstrap();
