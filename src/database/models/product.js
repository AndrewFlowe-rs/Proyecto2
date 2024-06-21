'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Categoty, {
        as: 'categorias',
        foreignKey: 'categoryId',
        timestamps: false
      });
      // Asociación con OrderItem
      Product.hasMany(models.OrderItem, { foreignKey: 'productId' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    categoryName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });
  return Product;
};
