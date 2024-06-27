'use strict';
const categoryJSON = require('../../data/category.json')

const categoryMAP = categoryJSON.map((c) => {
  return {
    name: c.name
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('categoties', categoryMAP, {});
    
  },

  async down (queryInterface, Sequelize) {
    

     
      await queryInterface.bulkDelete('categoties', null, {});
     
  }
};
