var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample-rest-project');
var db = mongoose.connection;
db.on('error', function(msg){
  console.log('MongoDB error: ', msg);
  process.exit(1);
});
db.on('open', function(){
  console.log('Connected to mongodb');
});
