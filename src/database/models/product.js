'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category,{
        as:'categorias',
        foreignKey: 'categoryId',
        timestamps: false
      })
     
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    categoryName: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });
  return Product;
};