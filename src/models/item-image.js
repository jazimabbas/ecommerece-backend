const { Model, DataTypes } = require("sequelize");

class ItemImage extends Model {}

function initModel(sequelize) {
  ItemImage.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "item_images",
      timestamps: false,
      underscored: true,
    }
  );
}

module.exports = {
  ItemImage,
  initModel,
};
