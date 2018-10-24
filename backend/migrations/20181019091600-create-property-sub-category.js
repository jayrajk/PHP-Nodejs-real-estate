  'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Property_sub_categories', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
      title: {
        type: Sequelize.STRING(40),
          allowNull: false,
      },
      cat_id: {
        type: Sequelize.UUID,
          onDelete: 'CASCADE',
          references: {
              model: 'Property_categories',
              key: 'id',
              as: 'cat_id'
          },
          allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Property_sub_categories');
  }
};
