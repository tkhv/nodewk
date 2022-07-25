const express = require('express');
const openChat = require('../controllers/chatControl');

const router = express.Router();

router.get('/chat', openChat.loginRedirect);
router.post('/chat', openChat.showChat);

module.exports = router;