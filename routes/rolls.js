var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var output = {};
  var number = 9;
  output.number = number;
  res.json(output);
});

module.exports = router;


// 1. return a number in json form
// 2. return a random number in json form
// 3. dice rolling
// 4. dice rolling with modifiers
// 5. support other rolling systems