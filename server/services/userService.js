const User = require('../models/user');  // assuming the User model is in a file named User.js
const bcrypt = require('bcrypt');
const constants = require('../common/constant'); // assuming the constants file is in the same directory


async function saveUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = new User({
        name: user.name,
        email: user.email,
        password: hashedPassword,
    });

    await newUser.save();
}
async function findUser(user) {
    console.log('foundUser1', user);
    const foundUser = await User.findOne({ email: user.email });
    console.log('foundUser', foundUser);
    if (foundUser) {
        const isPasswordValid = await bcrypt.compare(user.password, foundUser.password);
        if (isPasswordValid) {
            console.log('Password is valid');
            return foundUser;
        } else {
            console.log('Password is invalid');
            throw new Error(constants.PASSWORD_INVALID);
        }
    } else {
        console.log('User not found');
        throw new Error(constants.USER_NOT_FOUND);
    }
    return foundUser;
}
module.exports = {
    saveUser,
    findUser
};