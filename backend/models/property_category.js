'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property_category = sequelize.define('Property_category', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
      },
      title: {
          type: Sequelize.STRING(50),
          allowNull: false,
      }
  }, {});
  Property_category.associate = function(models) {
    // associations can be defined here
      Property_category.hasMany(models.Property,{
          foreignKey: 'property_cat_id',
          sourceKey: 'id'
      });

      Property_category.belongTo(models.Property_sub_category,{
          foreignKey: 'cat_id',
          sourceKey: 'id'
      })
  };
  return Property_category;
};
