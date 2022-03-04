const config = require("config");
const { Sequelize } = require("sequelize");
const user = require("./user");
const shop = require("./shop");

const sequelize = new Sequelize({ ...config.get("db") });

// initialized all the models here..
user.initModel(sequelize);
shop.initModel(sequelize);

const db = {};
db.sequelize = sequelize;
db.User = user.User;
db.Shop = shop.Shop;

module.exports = db;
