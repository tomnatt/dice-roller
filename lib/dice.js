function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function() {
  var min = 1;
  return Math.floor(Math.random() * (this.sides - min + 1)) + min;
};

module.exports = Dice;