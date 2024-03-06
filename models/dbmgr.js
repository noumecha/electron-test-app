const sqlite = require("better-sqlite3");
const db = new sqlite("../mydb.db");

exports.db = db;