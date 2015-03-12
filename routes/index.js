var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // var parts = splitRoll(req.query.roll);

  rollDice(req.query.roll);

  var x = 6;
  var number = rollDX(x)

  var output = {};
  output.number = number;

  // output.parts = parts;
  res.json(output);
});

module.exports = router;

// rolls a specific dX
function rollDX(max) {
  var min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// rolls a collection of dice (eg 2d6)
function rollDice(roll) {
  var bits = roll.split("d");

  var number = bits[0];
  var dice = bits[1];

  number = (number == "" ? 1 : number);
  console.log("Number: " + number);
  console.log("Type: " + dice);
}

function splitRoll(roll) {

  // split on +|-
  var compenents = roll.split(/\+|\-/);
  return compenents;

}

// 3. multiple dice rolling from parameter
// 4. dice rolling with modifiers
// 5. support other rolling systems