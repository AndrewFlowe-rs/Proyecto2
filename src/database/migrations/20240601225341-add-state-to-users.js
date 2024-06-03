'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'state', {
      type: Sequelize.STRING,
      allowNull: true // Puedes cambiar esto según tus requisitos
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'state');
  }
};
