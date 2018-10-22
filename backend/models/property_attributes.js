'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property_attributes = sequelize.define('Property_attributes', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID
      },
      built_up_area: {
          type: DataTypes.FLOAT,
          allowNull: true,
      },
      plot_area: {
          type: DataTypes.FLOAT,
          allowNull: true,
      },
      area_unit: {
          type: DataTypes.STRING(10),
          allowNull: false,
      },
      bedrooms: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      bathrooms: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      balconies: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      other_room: {
          type: DataTypes.STRING(30),
          allowNull: true,
      },
      total_floors: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      reserved_parking: {
          type: DataTypes.STRING(10),
          allowNull: false,
      },
      availability: {
          type: DataTypes.STRING(20),
          allowNull: false,
      },
      possession_by: {
          type: DataTypes.STRING(25),
          allowNull: false,
      },
      ownership: {
          type: DataTypes.STRING(20),
          allowNull: false,
      },
      expected_price: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      brokerage: {
          type: DataTypes.FLOAT,
          allowNull: true,
      },
      brokerage_type: {
          type: DataTypes.STRING(25),
          allowNull: true,
      },
      amenities: {
          type: DataTypes.STRING(100),
          allowNull: true,
      },
      power_backup: {
          type: DataTypes.STRING(10),
          allowNull: true,
      },
      water_source: {
          type: DataTypes.STRING(40),
          allowNull: true,
      },
      overlooking: {
          type: DataTypes.STRING(70),
          allowNull: true,
      },
      facing: {
          type: DataTypes.STRING(10),
          allowNull: true,
      },
      width_facing_road: {
          type: DataTypes.FLOAT,
          allowNull: true,
      },
      width_type: {
          type: DataTypes.STRING(10),
          allowNull: true,
      },
      floring_type: {
          type: DataTypes.STRING(15),
          allowNull: true,
      },
      furnishing_type: {
          type: DataTypes.STRING(15),
          allowNull: true,
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      property_image: {
          type: DataTypes.TEXT,
          allowNull: true,
      },
  }, {});
  Property_attributes.associate = function(models) {
    // associations can be defined here
      Property_attributes.hasOne(models.Property,{
          foreignKey: 'property_attr_id',
          sourceKey: 'id'
      })
  };
  return Property_attributes;
};
