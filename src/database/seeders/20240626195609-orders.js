'use strict';

const ordersJSON = require("../../data/orders.json")
const usersJSON = require("../../data/users.json") 

const ordersDBMapped = ordersJSON.map(o => {
  const user = usersJSON.find(u => u.email === o.user)
  return {
    total: o.total,
    userId: user ? user.id : null,
    state: o.state,
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', ordersDBMapped, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};