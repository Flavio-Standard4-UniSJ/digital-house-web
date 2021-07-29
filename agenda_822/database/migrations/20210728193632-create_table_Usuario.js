'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('Usuario',  {
      id: {
          type: Sequelize.STRING(100),
          primaryKey: true,
      },
      nome: {
          type: Sequelize.STRING(100),
          allowNull: false,
      },
      cpf: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      telefone: {
          type: Sequelize.STRING(12),
          allowNull: false,
      },
      email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
      },
      senha_hash: {
          type: Sequelize.STRING(100),
          allowNull: false,
      },
      pin: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
      },
      profissao: {
          type: Sequelize.STRING(100),
      },
      salario: {
          type: Sequelize.FLOAT,
          allowNull: false,
      },
      avatar: {
          type: Sequelize.TEXT,
      },
      tipo_usuario: {
          type: Sequelize.STRING,
          defaultValue: 'cliente',
          allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
  },
  {
      tableName: 'Usuario',
  });
  
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('Usuario');
    
  }
};
