'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Añadir la columna 'available' a la tabla 'products'
    await queryInterface.addColumn('products', 'available', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    });
  },

  async down (queryInterface, Sequelize) {
    // Eliminar la columna 'available' de la tabla 'products'
    await queryInterface.removeColumn('products', 'available');
  }
};

