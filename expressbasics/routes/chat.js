const express = require('express');
const path = require('path');

const router = express.Router();

const users = [];

router.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, '../',  'views', 'chat.html'));
    //res.redirect('/login');
});

router.post('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, '../',  'views', 'chat.html'));
    if(!users.includes(req.body.handle)){
        users.push(req.body.handle);
    }
    console.log(users);
});

exports.routes = router;
exports.users = users;