var express = require('express');
var router = express.Router();
console.log("3");


/* GET home page. */
router.get('/', function(req, res) {
    console.log("4");

  res.render('index', { title: 'Express' });

});

var mongoose = require('mongoose');

var Member = mongoose.model('Member');
// var Hierarchy = mongoose.model('Hierarchy');
var Club = mongoose.model('Club');
var Task = mongoose.model('Task');

router.get('/clubs', function(req, res, next) {
  Club.find(function(err, clubs) {
    if (err) { return next(err); }
    res.json(clubs);
  });
});

router.post('/clubs', function(req, res, next) {
  var club = new Club(req.body);

  club.save(function(err, club) {
    if (err) {return next(err);}
    res.json(club);
  });
});

router.get('/members', function(req, res, next) {
  Member.find(function(err, members) {
    if (err) { return next(err); }
    res.json(members);
  });
});

router.post('/members', function(req, res, next) {
  var member = new Member(req.body);

  member.save(function(err, member) {
    if (err) { return next(err); }
    res.json(member);
  });
});



module.exports = router;
