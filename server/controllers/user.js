/*eslint-disable*/

const User = require('../models').User;

module.exports = {
    createAUserAccount(request, response) {
        return User.create({
            email: request.body.email,
            username: request.body.username,
            password: request.body.password,
            userCategory: request.body.userCategory,
            membership: request.body.membership,
            firstname: request.body.firstname,
            othrenames: request.body.othrenames,
            lastname: request.body.lastname,
            dateOfBirth: request.body.dateOfBirth,
            mobileNumber: request.body.mobileNumber,
            blacklisted: request.body.blacklisted
        }).then((user) => {
            response.status(200).send({
                message: "Welcome to Hello Book Library " + (user.lastname == null ? user.username : user.lastname) + ", your account was created successfully.",
                Account_Details: user
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to create user account.",
            Error: error
        }));
    }, // closes createAUserAccount function


    signInAUser(request, response) {
        return User.findOne({
            where: {
                $or: [
                    { username: request.body.username },
                    { email: request.body.email },
                    { mobileNumber: request.body.mobileNumber }
                ],
                password: request.body.password
            }
        }).then((user) => {
            if (!user) {
                response.status(401).send({
                    message: 'Access Denied!',
                    details: 'Invalid Username or Password!'
                });
            }
            response.status(200).send({
                message: 'Access Granted...',
                details: 'Welcome ' + user.username + ', proceed to your dashboard.'
            });
        }).catch((error) => response.status(400).send({
            fatal: "An error occured while trying to sign in a user.",
            Error: error
        }));
    },
}; // closes module.exports Object