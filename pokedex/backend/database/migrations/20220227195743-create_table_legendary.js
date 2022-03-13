'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('legendary', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING(45)
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
        type: Sequelize.STRING
      },
      createdAt: {
      type: Sequelize.DATE,
      allowNull: false
      },
      updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('legendary');
  }
};
