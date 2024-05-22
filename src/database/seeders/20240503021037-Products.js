'use strict';
const jsondb = require("../../data/products.json") //traje el Json de Product
const proMaped = jsondb.map(p => {
  return {
    name: p.name,
    price: p.price,
    description: p.description,
    categoryName: p.category,
    image: p.image,


  }
})         //mapeo el Jsondb

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    /** Add seed commands here.
    
     Example: */
    await queryInterface.bulkInsert('Products', proMaped, {});

  },

  async down(queryInterface, Sequelize) {

    /** Add commands to revert seed here.
   
    Example: */
    await queryInterface.bulkDelete('Products', null, {});

  }
};
