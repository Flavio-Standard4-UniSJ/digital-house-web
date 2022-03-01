'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('coach', { 
        id:{ 
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING(100)
        },
        email: { 
          type: Sequelize.STRING(100),
          unique: true
        },
        senha: {
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
    await queryInterface.dropTable('coach');
  }
};
