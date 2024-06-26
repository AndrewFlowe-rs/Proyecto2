'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.User, {
        foreignKey: "roleId",
        as: "users",
      });
    }
  }
  Role.init({
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};
