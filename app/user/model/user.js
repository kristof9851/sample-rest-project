var mongoose = require('mongoose');

module.exports = mongoose.model(
  'user',
  new mongoose.Schema({
    userId: String,
    name: String,
    created: Date,
    updated: {type: Date, default: Date.now}
  }, {
    collection: 'users'
  })
);
