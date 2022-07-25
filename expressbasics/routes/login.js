const express = require('express');
const loginControl = require('../controllers/loginControl');

const router = express.Router();

router.get('/', (req, res) => res.redirect('/login'));

router.get('/login', loginControl.login);

module.exports = router;