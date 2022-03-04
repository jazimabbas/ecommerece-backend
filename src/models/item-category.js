const { Model, DataTypes } = require("sequelize");

class ItemCategory extends Model {}

function initModel(sequelize) {
  ItemCategory.init(
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
      shopId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "item_categories",
      timestamps: false,
      underscored: true,
    }
  );
}

module.exports = {
  ItemCategory,
  initModel,
};
