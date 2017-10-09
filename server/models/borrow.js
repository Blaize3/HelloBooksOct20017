/*eslint-disable*/

'use strict';

module.exports = (sequelize, DataTypes) => {
    const Borrow = sequelize.define('Borrow', {
        borrowId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        returnDueDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        returnedDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isDelayed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        daysDelayed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isFined: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        fine: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isFinePaid: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        fineOptions: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Borrow.associate = (models) => {
        Borrow.belongsTo(models.User, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });

        Borrow.belongsTo(models.Book, {
            foreignKey: "bookId",
            onDelete: "CASCADE"
        });
    }
    return Borrow;
};