const config = require("config");
const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize({ ...config.get("db") });

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { sequelize, tableName: "users", timestamps: false }
);

const db = {};
db.sequelize = sequelize;
db.User = User;

module.exports = db;
