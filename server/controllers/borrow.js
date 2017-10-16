/*eslint-disable*/

const Borrow = require('../models').Borrow;
const Book = require('../models').Book;
const db = require('../models/index');

module.exports = {
    borrowABook(request, response) {
        return Borrow.create({
            borrowId: request.body.borrowId,
            userId: request.body.userId,
            bookId: request.body.bookId,
            returnDueDate: request.body.returnDueDate,
            returnedDate: request.body.returnedDate,
            status: request.body.status,
            isDelayed: request.body.isDelayed,
            daysDelayed: request.body.daysDelayed,
            isFined: request.body.isFined,
            fine: request.body.fine,
            isFinePaid: request.body.isFinePaid,
            fineOptions: request.body.fineOptions
        }).then((borrow) => {
            response.status(200).send({
                message: "Borrow transaction completed successfully.",
                Borrow_Details: borrow
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to process a book borrow transaction.",
            Error: error
        }));
    }, // closes borrowABook function


    yetToBeReturnedBorrowedBooks(request, response) {
        // const id = req.params.userId;
        let allBooks, userBorrowedBooks = [];

        return Borrow.findAll({
            where: {
                userId: request.params.userId,
                $and: { status: 'not returned' }

            }
            //include: [db.Book]
        }).then((borrowedBooks) => {

            Book.findAll().then((books) => {
                if (!books) {
                    return null;
                }

                for (index in borrowedBooks) {

                    foundBook = books.find(book => book.id == borrowedBooks[index].bookId)
                    userBorrowedBooks.push(foundBook)
                }

                if (userBorrowedBooks.length > 0) {
                    response.status(200).send({
                        Number_of_Books: userBorrowedBooks.length + " " + (userBorrowedBooks.length == 1 ? 'book' : 'books') + " are yet to be returned by User " + request.params.userId + ".",
                        "Book List": userBorrowedBooks
                    });
                } else {
                    response.status(404).send({
                        message: 'No borrowed book to be returned by User ' + request.params.userId + "."
                    });
                }
            }).catch((error) => response.status(400).send({ Error: "i am error all books" }));
            /*
            if (books.length <= 0) {
                response.status(404).send({
                    message: 'No borrowed book to be returned by User ' + request.params.userId + "."
                });
            }
            response.status(200).send({
                Number_of_Books: books.length + " " + (books.length == 1 ? 'book' : 'books') + " are yet to be returned by User " + request.params.userId + ".",
                "Book List": books
            });
            */
        }).catch((error) => {
            console.log(error.toString());
            response.status(400).send({
                fatal: "An error occured while trying to retrieve all borrowed book records.",
                Error: error
            });
        });
    }, // closes yetToBeReturnedBorrowedBooks function


    returnBorrowedBook(request, response) {
        const updateObject = {
            id: request.body.id,
            borrowId: request.body.borrowId,
            userId: request.body.userId,
            bookId: request.body.bookId,
            returnDueDate: request.body.returnDueDate,
            returnedDate: request.body.returnedDate,
            status: request.body.status,
            isDelayed: request.body.isDelayed,
            daysDelayed: request.body.daysDelayed,
            isFined: request.body.isFined,
            fine: request.body.fine,
            isFinePaid: request.body.isFinePaid,
            fineOptions: request.body.fineOptions
        }
        return Borrow.update(updateObject, {
            where: {
                id: request.body.id
            }
        }).then((borrow) => {
            response.status(200).send({
                message: 'Returned book updated was successfully.'
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to return a borrowed book.",
            Error: error
        }));
    }, // closes returnBorrowedBook function
}; // closes module.exports Object