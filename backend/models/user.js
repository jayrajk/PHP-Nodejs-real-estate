'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
      },
      account_type: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          allowNull: false,
      },
      name: {
          type: DataTypes.STRING(50),
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING(50),
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING(100),
          allowNull: false,
      },
      phone: {
          type: DataTypes.BIGINT,
          allowNull: false,
      },
      household_income: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      occupation: {
          type: DataTypes.STRING(15),
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
