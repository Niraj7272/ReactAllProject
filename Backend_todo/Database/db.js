import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQLniraj@1',
    database: 'todolist'
});

db.connect((err)=>{
    if(err) console.log(err,"Error ayo database ma");
    return console.log("database connect vayo");
});

export default db