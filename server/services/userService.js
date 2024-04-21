const User = require('../models/user');  // assuming the User model is in a file named User.js
const bcrypt = require('bcrypt');
const constants = require('../common/constant'); // assuming the constants file is in the same directory


async function saveUser(user) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
        name: user.name,
        email: user.email,
        password: hashedPassword,
    });

    newUser.save()
        .then(() => console.log('User created'))
        .catch((err) => console.error(err));
}
async function findUser(user) {
    const foundUser = await User.findOne({ email: user.email });
    if (foundUser) {
        const isPasswordValid = await bcrypt.compare(user.password, foundUser.password);
        if (isPasswordValid) {
            console.log('Password is valid');
            return { email: foundUser.email, name: foundUser.name, userId: foundUser.userId };
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