import mysql from 'mysql2'

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'MySQLniraj@1',
    database: 'product',
});

db.connect((err)=>{
    if(err) console.log(err,"Error ayo database ma");
    return console.log("Database connect vayo");
});

export default db



