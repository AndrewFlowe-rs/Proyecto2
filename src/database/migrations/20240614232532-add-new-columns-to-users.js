'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('users');

    if (!tableDescription['resetPasswordToken']) {
      await queryInterface.addColumn('users', 'resetPasswordToken', {
        type: Sequelize.STRING,
        allowNull: true
      });
    }

    if (!tableDescription['resetPasswordExpires']) {
      await queryInterface.addColumn('users', 'resetPasswordExpires', {
        type: Sequelize.DATE,
        allowNull: true
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('users');

    if (tableDescription['resetPasswordToken']) {
      await queryInterface.removeColumn('users', 'resetPasswordToken');
    }

    if (tableDescription['resetPasswordExpires']) {
      await queryInterface.removeColumn('users', 'resetPasswordExpires');
    }
  }
};
