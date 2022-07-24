const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => { 
    res.redirect('/login');
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../',  'views', 'login.html'));
    //res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Login</button></form>");
});

module.exports = router;