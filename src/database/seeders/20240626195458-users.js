"use strict";

const usersJSON = require("../../data/users.json");
const rolesJSON = require("../../data/rols.json");

const usersDBMapped = usersJSON.map(u => {
  const role = rolesJSON.find(r => r.name_role === u.name_role);
  return {
    name: u.name,
    number: u.number,
    email: u.email,
    password: u.password,
    avatar: u.avatar,
    state: u.state,
    roleId: role ? role.role_id : null, 
    name_role: u.name_role,
    createdAt: new Date(),
    updatedAt: new Date()
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", usersDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};