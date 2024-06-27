Tematica
Evaluando el tema con el equipo, definimos realizar el Market Place de una Pizzeria.




----------------------
product seed
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
--------------------------
category seed
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
    
     await queryInterface.bulkInsert('Categoty', categoryMAP, {});
    
  },

  async down (queryInterface, Sequelize) {
    

     
      await queryInterface.bulkDelete('Categoty', null, {});
     
  }
};


---------------------
user seed
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
--------------------------------
order seed
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