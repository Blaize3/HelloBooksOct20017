/*eslint-disable*/

const Book = require('../models').Book;

module.exports = {
    addABook(request, response) {
        return Book.create({
            isbn: request.body.isbn,
            title: request.body.title,
            genre: request.body.genre,
            author: request.body.author,
            publisher: request.body.publisher,
            year: request.body.year,
            summary: request.body.summary,
            pages: request.body.pages,
            available: request.body.available,
            qtyStocked: request.body.qtyStocked,
            qtyAvailable: request.body.qtyAvailable
        }).then((book) => {
            response.status(200).send({
                message: "Book was added successfully.",
                Book_Details: book
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to create a book record.",
            Error: error
        }));
    }, // closes addABook function


    getAllBooks(request, response) {
        return Book.findAll().then((books) => {
            if (books.length <= 0) {
                response.status(404).send({
                    message: 'No book found!'
                });
            }
            response.status(200).send({
                Number_of_Books: books.length + " " + (books.length == 1 ? 'book' : 'books') + " were found.",
                "Book List": books
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to retrieve all book records.",
            Error: error
        }));
    }, // closes getAllBooks function


    modifyBookInformation(request, response) {
        const updateObject = {
            id: request.body.id,
            isbn: request.body.isbn,
            title: request.body.title,
            genre: request.body.genre,
            author: request.body.author,
            publisher: request.body.publisher,
            year: request.body.year,
            summary: request.body.summary,
            pages: request.body.pages,
            available: request.body.available,
            qtyStocked: request.body.qtyStocked,
            qtyAvailable: request.body.qtyAvailable
        };
        return Book.update(updateObject, {
            where: {
                id: request.body.id
            }
        }).then((book) => {
            response.status(200).send({
                message: "Book information was updated successfully."
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to update a book record.",
            Error: error
        }));
    }, // closes modifyBookInformation function
}; // closes module.exports Object