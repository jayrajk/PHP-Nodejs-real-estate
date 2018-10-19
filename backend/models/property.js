'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
      },
      user_id: {
          type: Sequelize.UUID,
          allowNull: false,
      },
      user_type: {
          type: Sequelize.STRING(10),
          allowNull: false,
      },
      property_for: {
          type: Sequelize.STRING(15),
          allowNull: false,
      },
      sale_type: {
          type: Sequelize.STRING(15),
          allowNull: false,
      },
      property_cat_id: {
          type: Sequelize.STRING(36),
          allowNull: false,
      },
      property_sub_cat_id: {
          type: Sequelize.STRING(36),
          allowNull: false,
      },
      property_attr_id: {
          type: Sequelize.STRING(36),
          allowNull: false,
      },
      city: {
          type: Sequelize.STRING(25),
          allowNull: false,
      },
      project_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
      },
      locality: {
          type: Sequelize.STRING(20),
          allowNull: false,
      },
      property_address: {
          type: Sequelize.STRING(200),
          allowNull: false,
      },
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
      Property.belongsTo(models.User, {
          foreignKey: 'user_id',
          sourceKey: 'id'
      });

      Property.belongsTo(models.Property_category,{
          foreignKey: 'property_cat_id',
          sourceKey: 'id'
      });

      Property.belongsTo(models.Property_sub_category,{
          foreignKey: 'property_sub_cat_id',
          sourceKey: 'id'
      });

      Property.belongsTo(models.Property_attributes,{
          foreignKey: 'property_attr_id',
          sourceKey: 'id'
      })
  };
  return Property;
};