function Dice(sides) {
  this.sides = (typeof sides !== 'undefined' ? sides : 6);
}

Dice.prototype.roll = function() {
  return Math.floor(Math.random() * this.sides) + 1;
};

module.exports = Dice;