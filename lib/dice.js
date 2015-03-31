function Dice(sides) {
  this.sides = (typeof sides !== 'undefined' ? sides : 6);
}

Dice.prototype.roll = function() {
  var min = 1;
  return Math.floor(Math.random() * (this.sides - min + 1)) + min;
};

module.exports = Dice;