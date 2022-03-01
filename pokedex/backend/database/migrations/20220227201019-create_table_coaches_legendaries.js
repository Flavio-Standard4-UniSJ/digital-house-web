'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('coaches_legendaries', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        coach_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          refereces: {
              model: 'Coach',
              key: 'id'
          }            
        },
        legendary_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          refereces: {
              model: 'Legendary',
              key: 'id'
          }            
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
    await queryInterface.dropTable('coaches_legendaries');
  }
};
