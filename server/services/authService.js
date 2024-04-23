const jwt = require('jsonwebtoken');

let secretKey = "your-secret-key";
function authenticate(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}

function generateToken(user) {
    let token = jwt.sign({ id: user._id }, secretKey);
    console.log("token" + token);
    return token;
}

module.exports = {
    authenticate,
    generateToken
};