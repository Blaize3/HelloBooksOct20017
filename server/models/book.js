/*eslint-disable*/

'use strict';

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: true
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        qtyStocked: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        qtyAvailable: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Book.associate = (models) => {
        Book.hasMany(models.Borrow, {
            foreignKey: "bookId",
            as: "book"
        });
    }
    return Book;
};