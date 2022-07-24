const fs = require('fs');

const reqHandler = (req, res) => {
    const url = req.url;

    if (url === "/login") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Login</title></head>');
        res.write('<body><form action="/msg" method="POST"><input type="text" name="msag"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }

    if (url === "/msg" && req.method === "POST") {
        const chunks = [];
        req.on('data', (chunk) => {
            chunks.push(chunk);
        })
        return req.on('end', () => {
            const data = Buffer.concat(chunks).toString();
            fs.writeFile("msg.txt", data.split('=')[1], err => {
                res.statusCode = 302;
                res.setHeader("location", "/ooga"); 
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>request</title></head><body><h1>You requested ' + url + '.</h1>');
    res.write('<h2>'+ req.msag + '</h2></body></html>');
    res.end();
};

module.exports.reqHandler = reqHandler;