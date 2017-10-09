/*eslint-disable*/

'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('Books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            isbn: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            genre: {
                allowNull: true,
                type: Sequelize.STRING
            },
            author: {
                allowNull: false,
                type: Sequelize.STRING
            },
            publisher: {
                allowNull: true,
                type: Sequelize.STRING
            },
            year: {
                allowNull: false,
                type: Sequelize.STRING
            },
            summary: {
                allowNull: true,
                type: Sequelize.STRING
            },
            pages: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            available: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            qtyStocked: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            qtyAvailable: {
                allowNull: false,
                type: Sequelize.INTEGER
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
        queryInterface.dropTable('Books');
    }
};