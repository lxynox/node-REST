var MongoClient = require('mongodb').MongoClient;

// Connection URL
var database = {
  _instance: null,

  get: function() {
    // console.log('get the instance of database');
    return this._instance;
  },

  connect: function(url, cb) {
    // console.log('conencting ... ');
    var self = this;

    MongoClient.connect(url, function(err, db) {
      if (err) {
        throw err;
      }
      self._instance = db; 
      // console.log('Connected to mongodb successfully!');
      cb(null, db);
    });
  },

  close: function() {
    var self = this;
    // console.log('Closing db connection');
    if (self.get()) {
      self.get().close(function(err, result) {
        if (err) {
          throw err;
        }
        self._instance = null;
        console.log(result);
      });
    }
  },
}

module.exports = database;
