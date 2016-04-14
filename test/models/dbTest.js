// tests 
var userDao = require('./userDao');
database.connect(URL, function(err, db) {
  if (err) {
    throw err;
  }
  console.log('CRUD operations');
  userDao.users = db.collection('users');
  userDao.retrieveUsers();
});
//userDao.createUser({ name: 'xli', passwd: '' }); 
describe('db', function() {
  const URL = 'mongodb://localhost:27017/myproject';

  it('db should be able to connect to localhost', function() {
  });

  it('db should be able to be closed after all CRUD operations', function() {
  });

  it('db instance should be able to be accessed using a getter method', function() {
  });
});
