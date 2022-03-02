const { Model, DataTypes } = require("sequelize");

class User extends Model {}

function getModel(sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    { sequelize, tableName: "users", timestamps: false }
  );
}

module.exports = {
  User,
  getModel,
};
