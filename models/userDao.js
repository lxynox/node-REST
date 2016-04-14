var db = require('./db');

var userDao = {
  createUser: function(user, cb) {
    const users = db.get().collection('users')
    users.insert({ name: user.name, passwd: user.passwd }, function(err, result) {
      if (err) {
        throw err;
      }

      cb();
      console.log('inserted ' + result.insertedCount + ' user');
    });
  },

  retrieveUsers: function(cb) {
    const users = db.get().collection('users')
    users.find().toArray(function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log('found ' + result.length + ' users');
    });
  },

  updateUser: function(user, cb) {
    const users = db.get().collection('users')
    users.updateOne({ name: user.name }, { $set: { passwd: user.passwd } }
      , function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log('updated ' + result + ' user');
    });
  },

  deleteUser: function(user, cb) {
    const users = db.get().collection('users')
    users.deleteOne({ name: user.name }, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result.deletedCount);
      console.log('deleted ' + result.deletedCount + ' user');
    });
  }
}

module.exports = userDao;
