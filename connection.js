let mysql = require('mysql');

// buat koneksi
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'dbapinodejs'
});

conn.connect((err)=>{
  if(err) throw err;
  console.log('Mysql udah connect');
});

module.exports = conn;