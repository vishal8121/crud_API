const mysql = require('mysql');

  const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "userDb"
  });  
  db.connect( function(err){
    if(err){
      console.log("Error connecting to Mysql: " + err)
    }
    else{
     console.log('Connection established');
    }
  })

  module.exports = db