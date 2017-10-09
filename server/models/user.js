/*eslint-disable*/

'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userCategory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        membership: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        othrenames: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: true
        },
        mobileNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        blacklisted: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Borrow, {
            foreignKey: "userId",
            as: "borrower"
        });
    }
    return User;
};