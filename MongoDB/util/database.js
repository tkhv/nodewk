require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.DB_URL) // Declare MongoDB Atlas URL as DB_URL in .env
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw "No database found.";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
