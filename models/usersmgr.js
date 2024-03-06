let dmgr = require("./dbmgr.js");
let db = dmgr.db;

exports.getUsers = () => {
    const req = "SELECT * FROM user";
    let stmt = db.prepare(req);
    let res = stmt.all();

    return res;
}