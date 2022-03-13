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
          type: Sequelize.STRING(100),
          allowNull: false
        },
        email: { 
          type: Sequelize.STRING(100),
          unique: true,
          allowNull: false
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false
        },
        perfil: {
            type: Sequelize.STRING,
            allowNull: false
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
