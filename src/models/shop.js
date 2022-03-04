const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

class Shop extends Model {}

function initModel(sequelize) {
  Shop.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { sequelize, tableName: "shops", timestamps: false, underscored: true }
  );
}

module.exports = {
  Shop,
  initModel,
};
