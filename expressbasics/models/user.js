const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'users.json'
);

const getUsersFromFile = callback => {
    fs.readFile(p, (err, fileContent) => {
        if (err) return callback([]);
        callback(JSON.parse(fileContent));
    });
};

module.exports = class User {
    constructor(name) {
        this.username = name;
    }

    save() {
        getUsersFromFile(users => {
            users.push(this);
            fs.writeFile(p, JSON.stringify(users), (err) => {
                console.log(err);
            });
        })
    }

    static fetchUsers(callback) {
        getUsersFromFile(callback);
    }
}