const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  async getHashedPassword() {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(this.password, salt);
  }
}

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
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, tableName: "users", timestamps: false }
  );
}

module.exports = {
  User,
  getModel,
};
