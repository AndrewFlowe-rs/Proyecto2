'use strict';

const orderJSON = require('../../data/orders.json');
const productsJSON = require('../../data/products.json');

const orderProductsMap = orderJSON.flatMap(ord => {
  return ord.products.map(productsOrd => {
    const productFind = productsJSON.find(productDB => {
      return productDB.name === productsOrd.name;
    });
    return {
      orderId: ord.id,
      productId: productFind ? productFind.id : null,
      quantity: productsOrd.quantity,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  });
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderProducts', orderProductsMap, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderProducts', null, {});
  }
};
