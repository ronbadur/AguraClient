const app = require("express")();
const http = require('http').Server(app);
const bodyParser = require("body-parser");
const cors = require('cors');

const mongoose = require("mongoose");
const config = require('./configs/db');
const users = require('./controllers/users');
const items = require('./controllers/items');

const categories = require('./controllers/categories');

// Connect mongoose to our database
mongoose.connect(config.database, {useNewUrlParser: true});
var db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db!")
});


//Declaring Port
const port = 3000;

// Middleware for CORS
app.use(cors());

// Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/items', items);
app.use('/api/categories', categories);


var clients = [];
global.clients = clients;

//Listen to port 3000
http.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});


module.exports = app;

