'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Property_attributes', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
      built_up_area: {
        type: Sequelize.FLOAT,
          allowNull: true,
      },
      plot_area: {
        type: Sequelize.FLOAT,
          allowNull: true,
      },
      area_unit: {
        type: Sequelize.STRING(10),
          allowNull: false,
      },
      bedrooms: {
        type: Sequelize.INTEGER,
          allowNull: false,
      },
      bathrooms: {
        type: Sequelize.INTEGER,
          allowNull: false,
      },
      balconies: {
        type: Sequelize.INTEGER,
          allowNull: false,
      },
      other_room: {
        type: Sequelize.STRING(30),
          allowNull: true,
      },
      reserved_parking: {
        type: Sequelize.STRING(10),
          allowNull: false,
      },
      availability: {
        type: Sequelize.STRING(20),
          allowNull: false,
      },
      ownership: {
        type: Sequelize.STRING(20),
          allowNull: false,
      },
      expected_price: {
        type: Sequelize.INTEGER,
          allowNull: false,
      },
      brokerage: {
        type: Sequelize.FLOAT,
          allowNull: true,
      },
      brokerage_type: {
        type: Sequelize.STRING(25),
          allowNull: true,
      },
      amenities: {
        type: Sequelize.STRING(100),
          allowNull: true,
      },
      power_backup: {
        type: Sequelize.STRING(10),
          allowNull: true,
      },
      water_source: {
        type: Sequelize.STRING(40),
          allowNull: true,
      },
      overlooking: {
        type: Sequelize.STRING(70),
          allowNull: true,
      },
      facing: {
        type: Sequelize.STRING(10),
          allowNull: true,
      },
      width_facing_road: {
        type: Sequelize.FLOAT,
          allowNull: true,
      },
      width_type: {
        type: Sequelize.STRING(10),
          allowNull: true,
      },
      floring_type: {
        type: Sequelize.STRING(15),
          allowNull: true,
      },
      furnishing_type: {
        type: Sequelize.STRING(15),
          allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
          allowNull: false,
      },
      property_image: {
        type: Sequelize.TEXT,
          allowNull: true,
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
    return queryInterface.dropTable('Property_attributes');
  }
};