'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
  await queryInterface.createTable('Coach', {id:{ 
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
      type: Sequelize.DATE
  },
    updatedAt: {
      type: Sequelize.DATE
    }}
  );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Coach');
  }
};
