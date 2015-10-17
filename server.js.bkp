var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// DB schemas and models
var userModel = mongoose.model(
  'user',
  new mongoose.Schema({
    userId: String,
    name: String,
    created: Date,
    updated: Date
  }, {
    collection: "users"
  })
);

// DB connection
mongoose.connect('mongodb://localhost/sample-rest-project');
var db = mongoose.connection;
db.on('error', function(msg){
  console.log('MongoDB error: ', msg);
  process.exit(1);
});
db.on('open', function(){
  console.log('Connected to mongodb');
});


app.use(function(req, res, next){
  console.time('request-time');
  next();
});

app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.send('hello world');
  next();
});

app.get('/users', function(req, res, next) {
  res.send('users');
  next();
});

app.get('/users/:id', function(req, res, next) {
  res.send('user ', req.params.id);
  next();
});

app.delete('/users/:id', function(req, res, next) {
  res.send('users');
  next();
});

app.post('/users', function(req, res, next) {
console.log(req);
    // Create record
    var user = new userModel({
      userId: req.body.user.id,
      name: req.body.user.name,
      created: Date.now(),
      updated: Date.now()
    });

    // Save
    user.save(function(err, newUser){
      // Error?
      if (err) {
        console.error('MongoDB error: ' + err);
        next(err);
        return;
      }

      // Respond with full object
      console.log('created: ', newUser);
      res.send(newUser);
      next();
    });
});

app.use(function(req, res, next){
  console.timeEnd('request-time');
  next();
});

var server = app.listen(1234, function(){
  console.log('Server started: ', server.address());
});
