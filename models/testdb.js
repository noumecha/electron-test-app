const mysql = require("mysql2");

const getTest = () => {
    let con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : null,
    database : 'test'
    });

    con.connect();
    let sql = "SELECT * FROM eleve";
    con.query(sql, function(err, result, fields) {
        if (err) throw err;
        console.log('resultat de la requete : ',result);
    });
    
    return result;
};

module.exports = {
    getTest
}