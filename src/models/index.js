const config = require("config");
const { Sequelize } = require("sequelize");
const user = require("./user");

const sequelize = new Sequelize({ ...config.get("db") });

// initialized all the models here..
user.getModel(sequelize);

const db = {};
db.sequelize = sequelize;
db.User = user.User;

module.exports = db;
