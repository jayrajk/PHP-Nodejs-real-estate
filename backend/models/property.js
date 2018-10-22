'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
      },
      user_id: {
          type: DataTypes.UUID,
          allowNull: false,
      },
      user_type: {
          type: DataTypes.STRING(10),
          allowNull: false,
      },
      property_for: {
          type: DataTypes.STRING(15),
          allowNull: false,
      },
      sale_type: {
          type: DataTypes.STRING(15),
          allowNull: false,
      },
      property_cat_id: {
          type: DataTypes.UUID,
          allowNull: false,
      },
      property_sub_cat_id: {
          type: DataTypes.UUID,
          allowNull: false,
      },
      property_attr_id: {
          type: DataTypes.UUID,
          allowNull: false,
      },
      city: {
          type: DataTypes.STRING(25),
          allowNull: false,
      },
      project_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
      },
      locality: {
          type: DataTypes.STRING(20),
          allowNull: false,
      },
      property_address: {
          type: DataTypes.STRING(200),
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
