var express = require('express');
var routes = require('./routes');
var calendar = require('Calendar');

app = express();
var port = '3000';

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'smath'
});

connection.connect();
connection.query("REPLACE INTO homework_data (email, date, description, title) VALUES ('nikninza@icloud.com', '10/11/2017', 'Test homework', 'Test')", function (error, results, fields) {
  if (error) throw error;
});

connection.end();

//Test

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/calendar', routes.calendar);

app.get('*', routes.notFound);

app.listen(port, function() {
	console.log("Running on port " + port);
});
