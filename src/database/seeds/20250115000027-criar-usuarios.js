/* eslint-disable no-undef */
'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'Luiz',
        email: 'luiz@outllok.com.br',
        password_hash: await bcryptjs.hash('123789', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz2',
        email: 'luiz2@outllok.com.br',
        password_hash: await bcryptjs.hash('123789', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz3',
        email: 'luiz3@outllok.com.br',
        password_hash: await bcryptjs.hash('123789', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }],
      {}
    );
  },

  async down () {}
};
