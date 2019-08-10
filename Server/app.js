const app = require("express")();
const http = require('http').Server(app);
const bodyParser = require("body-parser");
const cors = require('cors');


//Declaring Port
const port = 3000;

// Middleware for CORS
app.use(cors());

// Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var clients = [];
global.clients = clients;

//Listen to port 3000
http.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});



module.exports = app;

