var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles/:id', function(req, res) {
  db.getProfile(req.params.id, req.app.get('connection'))
    .then(function (profiles) {
      res.render('view', profiles[0])
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/new', function(req, res) {
  res.render('new')
})

router.post('/new', function(req, res){
db.newUser(req.body, req.app.get('connection'))
  .then(function(profile) {
    res.redirect('/profiles/' + profile.user_id)
  })
})

module.exports = router
