const { Model, DataTypes } = require("sequelize");

class Favorite extends Model {}

function initModel(sequelize) {
  Favorite.init(
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
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize, tableName: "favorites", timestamps: false, underscored: true }
  );
}

module.exports = {
  Favorite,
  initModel,
};
