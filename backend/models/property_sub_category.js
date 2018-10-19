'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property_sub_category = sequelize.define('Property_sub_category', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
      },
      title: {
          type: Sequelize.STRING(40),
          allowNull: false,
      },
      cat_id: {
          type: Sequelize.STRING(36),
          allowNull: false,
      },
  }, {});
  Property_sub_category.associate = function(models) {
    // associations can be defined here
      Property_sub_category.hasMany(models.Property,{
          foreignKey: 'property_sub_cat_id',
          sourceKey: 'id'
      });

      Property_sub_category.hasOne(models.Property_category,{
          foreignKey: 'cat_id',
          sourceKey: 'id'
      });

  };
  return Property_sub_category;
};