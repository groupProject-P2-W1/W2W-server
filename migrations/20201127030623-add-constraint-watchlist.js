'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Watchlists', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkey_UserId',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Watchlists', 'fkey_UserId', {})
  }
};
