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
    var sql="CREATE TABLE employees(id (Primary Key, Auto-increment),name (VARCHAR, 255 characters),department (VARCHAR, 100 characters),salary (DECIMAL, 10, 2))";
    con.query(sql,function(err){
        if(err){
            console.error(err);
        }
        
    });
    console.log("Table created");
});

