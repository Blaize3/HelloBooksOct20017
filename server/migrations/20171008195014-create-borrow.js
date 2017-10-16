/*eslint-disable*/
module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('Borrows', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            borrowId: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
            },
            /* userId: {
                 allowNull: false,
                 type: Sequelize.INTEGER,
                 onDelete: "CASCADE",
                 references: {
                     model: "User",
                     key: "id",
                     as: "userId"
                 }
             },
             bookId: {
                 allowNull: false,
                 type: Sequelize.INTEGER,
                 onDelete: "CASCADE",
                 references: {
                     model: "Book",
                     key: "id",
                     as: "bookId"
                 }
             },*/
            userId: {
                type: Sequelize.STRING,
                onDelete: 'CASCADE',
                reference: {
                    model: 'User',
                    key: 'id',
                    as: 'userId',
                }
            },
            bookId: {
                type: Sequelize.STRING,
                onDelete: 'CASCADE',
                reference: {
                    model: 'Book',
                    key: 'id',
                    as: 'bookId',
                }
            },
            returnDueDate: {
                allowNull: false,
                type: Sequelize.DATE
            },
            returnedDate: {
                allowNull: true,
                type: Sequelize.DATE
            },
            status: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isDelayed: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            daysDelayed: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            isFined: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            fine: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isFinePaid: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            fineOptions: {
                allowNull: true,
                type: Sequelize.STRING
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
        queryInterface.dropTable('Borrows');
    }
};