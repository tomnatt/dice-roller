var expect = require('chai').expect,
    Dice = require('../lib/dice');

describe('test the dice object', function() {

  it('sets sides a default number of sides', function() {
    var dice = new Dice();
    expect(dice.sides).to.equal(6);
  });

  it('sets sides correctly', function() {
    var dice = new Dice(8);
    expect(dice.sides).to.equal(8);
  });

});
