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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      itemImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      itemQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      purchasedDate: {
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
