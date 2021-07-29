'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('UsuarioContato',  {
      id: {
          type: Sequelize.STRING(100),
          primaryKey: true,
        },
        fk_id_usuario: {
          type: Sequelize.STRING(100),
          allowNull: false,
          references: {
            model: 'Usuario',
            key: 'id'
          }
        },
        fk_id_contato: {
          type: Sequelize.STRING(100),
          allowNull: false,
          references: {
            model: 'Contato',
            key: 'id'
          }
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
  }, {
      tableName: 'UsuarioContato',
  });
    
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable('UsuarioContato');

  }
};
