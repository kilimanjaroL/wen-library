
var mysql      = require('mysql');
const express = require('express');
const app = express();
	
app.use(express.static(__dirname + '/'));
	
app.get('/index', function (req, res) {
    res.sendFile(__dirname  + '/index.html');
});
app.get('/login', function (req, res) {
    res.sendFile(__dirname  + '/login.html');
});
app.get('/book', function (req, res) {
    res.sendFile(__dirname + '/book.html');
});
app.listen(3000, () => {
    console.log('running on port 3000...');
});
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'book'
});

connection.connect();

app.get("/all_news", function (req, res) {

    const sql_str ='SELECT * FROM allbook';
 
    connection.query(sql_str, function (err, result) {
        if (err) {
            console.log("读取数据失败！" + err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get("/users", function (req, res) {

    const sql_str1 ='SELECT * FROM user';
   
    connection.query(sql_str1, function (err, result) {
        if (err) {
            console.log("读取数据失败！" + err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});




	


	