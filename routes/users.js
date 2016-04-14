var express = require('express');
var router = express.Router();

// for simple app, use routes as the controller layer of the MVC architectural pattern

// require dependencies from models
var userDao = require('../models/userDao');

// GET users listing 
router.get('/', function(req, res, next) {
  userDao.retrieveUsers(function(users) {
    res.render('user', { users: users }); // server-side rendering
  });
});

// create chainable route handlers for a route path by using app.route()
router.route('/:username')
  // Retrieve
  .get(function(req, res, next) {
    console.log( 'router get: ' + req.query.id);
    userDao.retrieveUsers(function(users) {
      res.render('user', { users: users }); // server-side rendering
    });
  })
  // Create
  .post(function(req, res, next) {
    userDao.createUser({ 
      name: req.body.name, 
      passwd: req.body.passwd 
    }, function() {
      res.send('One new user created successfully!'); // send string msg
    });
  })
  // Update
  .put(function(req, res, next) {
    userDao.updateUser({ 
      name: req.body.name, 
      passwd: req.body.passwd 
    }, function(data) {
      res.json({ result: data });
    });
  })
  // Delete
  .delete(function(req, res, next) {
    userDao.deleteUser({ 
      name: req.body.name 
    }, function(count) {
      res.send('deleted ' + count + ' user!');
    });
  });

module.exports = router;
