'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Legendary', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(100),            
        },
        description: {
            type: Sequelize.STRING(100),
        },
        type: {
            type: Sequelize.STRING(100),
        },
        healthPoints: {
            type: Sequelize.FLOAT,
        },
        specialAttack: {
            type: Sequelize.FLOAT,
        },
        defense: {
            type: Sequelize.FLOAT,
        },
        attack: {
            type: Sequelize.FLOAT,
        },
        experience: {
            type: Sequelize.FLOAT,
        },
        specialDefense:{
            type: Sequelize.FLOAT,
        },
        url: {
            type: Sequelize.STRING,
        },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Legendary');
  }
};
