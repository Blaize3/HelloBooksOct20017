/*eslint-disable*/

'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
            },
            username: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            userCategory: {
                type: Sequelize.STRING
            },
            membership: {
                allowNull: false,
                type: Sequelize.STRING
            },
            firstname: {
                allowNull: true,
                type: Sequelize.STRING
            },
            othrenames: {
                allowNull: true,
                type: Sequelize.STRING
            },
            lastname: {
                allowNull: true,
                type: Sequelize.STRING
            },
            dateOfBirth: {
                allowNull: true,
                type: Sequelize.DATE
            },
            mobileNumber: {
                allowNull: true,
                type: Sequelize.STRING
            },
            blacklisted: {
                allowNull: true,
                type: Sequelize.BOOLEAN
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
        queryInterface.dropTable('Users');
    }
};