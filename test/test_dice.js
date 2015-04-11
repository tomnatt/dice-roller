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

  it('rolls correctly', function() {
    var d6 = new Dice();
    expect(d6.roll()).to.be.within(1,6);
    expect(d6.roll()).to.be.within(1,6);
    expect(d6.roll()).to.be.within(1,6);

    var d10 = new Dice(10);
    expect(d10.roll()).to.be.within(1,10);
    expect(d10.roll()).to.be.within(1,10);
    expect(d10.roll()).to.be.within(1,10);

    var d4 = new Dice(4);
    expect(d4.roll()).to.be.within(1,4);
    expect(d4.roll()).to.be.within(1,4);
    expect(d4.roll()).to.be.within(1,4);
  })

});
