var sql=require('mysql2');

var con=sql.createConnection({
    host: "localhost",
    username: "root",
    password: "root",
    database: "mydb2"
});
con.connect(function(err){
    if(err){
        console.error("error");
    }
    var sql="CREATE DATABASE mydb2";
    con.query(sql,function(err){
        if(err){
            console.error(err);
        }
    });
    console.log("Database created")
    
});