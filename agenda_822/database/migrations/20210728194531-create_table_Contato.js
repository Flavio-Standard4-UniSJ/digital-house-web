'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('Contato',  {
            id: {
                type: Sequelize.STRING(100),
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            sexo: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            endereco: {
                type: Sequelize.TEXT,
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
            profissao: {
                type: Sequelize.STRING(100),
            },
            avatar: {
                type: Sequelize.TEXT,
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
            tableName: 'Contato',
        });
  
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable('Contato');
    
  }
};
