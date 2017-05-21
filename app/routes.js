var express = require('express');
var mongoose = require('mongoose');
var models = require('./models');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

});

/* GET login page. */
router.get('/login', function(req, res) {
    res.render('login');
});


router.get('/clubs', function(req, res, next) {
  models.Club.find(function(err, clubs) {
    if (err) { return next(err); }
    res.json(clubs);
  });
});

router.get('/clubs/:id', function (req, res, next) {
  models.Club.findById(req.params.id, function (err, document) {
    if (err) { return next(err); }
    res.json(document);
  });
});

router.post('/clubs', function(req, res, next) {
  var club = new models.Club(req.body);
  // console.log(req.body);  //seeing what the post body is in the terminal

  club.save(function(err, club) {
    if (err) {return next(err);}
    res.json(club);
  });
});

router.get('/members', function(req, res, next) {
  models.Member.find(function(err, members) {
    if (err) { return next(err); }
    res.json(members);
  });
});

router.post('/members', function(req, res, next) {
  var member = new models.Member(req.body);

  member.save(function(err, member) {
    if (err) { return next(err); }
    res.json(member);
  });
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
