var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x = req.query.roll;
  var number = rollDX(x)

  var output = {};
  output.number = number;
  res.json(output);
});

module.exports = router;

function rollDX(max) {
  var min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. multiple dice rolling from parameter
// 4. dice rolling with modifiers
// 5. support other rolling systems