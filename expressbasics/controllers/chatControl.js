const path = require('path');
const User = require('../models/user');

// GET req
exports.loginRedirect = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'chat.html'));
    //res.redirect('/login');
}

// POST req
exports.showChat = (req, res) => {
    const user = new User(req.body.handle);
    user.save();
    res.sendFile(path.join(__dirname, '../', 'views', 'chat.html'));
    User.fetchUsers(users => {
        console.log(users);
    })
}