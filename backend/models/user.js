'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
      },
      account_type: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false,
      },
      name: {
          type: Sequelize.STRING(50),
          allowNull: false,
      },
      email: {
          type: Sequelize.STRING(50),
          allowNull: false,
      },
      password: {
          type: Sequelize.STRING(100),
          allowNull: false,
      },
      phone: {
          type: Sequelize.BIGINT,
          allowNull: false,
      },
      household_income: {
          type: Sequelize.INTEGER,
          allowNull: true,
      },
      occupation: {
          type: Sequelize.STRING(15),
          allowNull: true,
      }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
      User.hasMany(models.Property, {
          foreignKey: 'user_id',
          sourceKey: 'id'
      })
  };
  return User;
};