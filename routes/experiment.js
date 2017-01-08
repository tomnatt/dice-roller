var express = require('express');
var router = express.Router();
var Dice = require('../lib/dice');

/* GET /experiment */
router.get('/', function(req, res, next) {

  var output = {};

  var dice6 = new Dice(6);
  var dice10 = new Dice(10);

  output.six_object_type = typeof dice6;
  output.six_sides = dice6.sides;
  output.six_roll = dice6.roll();

  output.ten_object_type = typeof dice10;
  output.ten_sides = dice10.sides;
  output.ten_roll = dice10.roll();

  res.json(output);
});

module.exports = router;
