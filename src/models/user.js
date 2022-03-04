const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

class User extends Model {
  getJwtToken() {
    const fields = {
      id: this.id,
      name: this.name,
      email: this.email,
    };
    return jwt.sign(fields, config.get("jwt.secret"));
  }

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
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      about: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { sequelize, tableName: "users", timestamps: false }
  );
}

module.exports = {
  User,
  getModel,
};
