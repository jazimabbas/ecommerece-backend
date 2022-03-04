const { Model, DataTypes } = require("sequelize");

class Purchase extends Model {}

function initModel(sequelize) {
  Purchase.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      item_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      item_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      item_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      purchased_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, tableName: "purchases", timestamps: false, underscored: true }
  );
}

module.exports = {
  Purchase,
  initModel,
};
