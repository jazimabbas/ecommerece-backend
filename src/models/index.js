const config = require("config");
const { Sequelize } = require("sequelize");
const user = require("./user");
const shop = require("./shop");
const itemCategory = require("./item-category");
const item = require("./item");

const sequelize = new Sequelize({ ...config.get("db") });

// initialized all the models here..
user.initModel(sequelize);
shop.initModel(sequelize);
itemCategory.initModel(sequelize);
item.initModel(sequelize);

const db = {};
db.sequelize = sequelize;
db.User = user.User;
db.Shop = shop.Shop;
db.ItemCategory = itemCategory.ItemCategory;
db.Item = item.Item;

module.exports = db;
