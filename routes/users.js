var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = require('../api/users');
  users()
  .then( (result) => {
    res.send(result);
  });
});

module.exports = router;
