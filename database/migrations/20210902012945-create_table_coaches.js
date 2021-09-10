'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coaches', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),            
      }, 
      email: {
        type: Sequelize.STRING
      },
      senha: {
          type: Sequelize.STRING
      },
      pin: {
          type: Sequelize.STRING
      },       
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },    
    });    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coaches');    
  }
};
