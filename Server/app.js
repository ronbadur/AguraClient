const app = require("express")();
const http = require('http').Server(app);
const bodyParser = require("body-parser");
const cors = require('cors');
const io = require('socket.io')(http);
const mongoose = require("mongoose");
const config = require('./configs/db');
const users = require('./controllers/users');
const items = require('./controllers/items');

const categories = require('./controllers/categories');

global.io = io;

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

io.on('connection', socket => {
  
  console.log('user connected');

  socket.on('sendUser', (id)=> {
    clients.push({
      id: id,
      "socket": socket.id
    });
    
    console.log(clients);

  });
  
  socket.on('disconnect', function(){
    var index = clients.find((client, i) => {
      if (client.socket == socket.id) {
        return i;
      }
    });

    clients.splice(index, 1);
    console.log(clients);

    console.log('user disconnected');
  });
  

});

//Listen to port 3000
http.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});

//Listen to port 3000
http.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});


module.exports = app;

