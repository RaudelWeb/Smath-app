var express = require('express');
var routes = require('./routes');
app = express();
var port = '3000';


app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('*', routes.notFound);

app.listen(port, function() {
	console.log("Running on port " + port);
});
