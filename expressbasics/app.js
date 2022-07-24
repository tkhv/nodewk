const express = require('express');
const routeLogin = require('./routes/login');
const chatData = require('./routes/chat');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("./public"))
app.use(routeLogin);
app.use(chatData.routes);

app.use((req, res) => {
    res.status(404);
    res.send('<h1> No such directory lmao</h1>');
    //console.log(req);
})

app.listen(3000);