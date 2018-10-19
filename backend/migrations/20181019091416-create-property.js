'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Properties', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            user_id: {
                type: Sequelize.UUID,
                onDelete: 'CASCADE',
                references: {
                    model: 'Users',
                    key: 'id',
                    as: 'user_id'
                },
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
        return queryInterface.dropTable('Properties');
    }
};