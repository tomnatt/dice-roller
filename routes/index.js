var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // default to a d6
  var roll = (typeof req.query.roll !== 'undefined' ? req.query.roll : 'd6');
  var result = rollDice(roll);
  // console.log(result);

  var output = {};
  output.result = result;

  output.result1 = rollDice(roll);
  output.result2 = rollDice(roll);
  output.result3 = rollDice(roll);
  output.result4 = rollDice(roll);
  output.result5 = rollDice(roll);
  output.result6 = rollDice(roll);
  output.result7 = rollDice(roll);
  output.result8 = rollDice(roll);
  output.result9 = rollDice(roll);
  output.result0 = rollDice(roll);

  // output.parts = parts;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(output));
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
  var number = (bits[0] == "" ? 1 : bits[0]);
  var dice = bits[1];

  var total = 0;
  for (i = 0; i < number; i++) {
    total += rollDX(dice);
  }

  return total;
}

function splitRoll(roll) {

  // split on +|-
  var compenents = roll.split(/\+|\-/);
  return compenents;

}
