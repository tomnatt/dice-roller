var expect = require('chai').expect,
    BasicLuckParser = require('../lib/luck_parsers/basic_luck_parser'),
    d20Roller = require('../lib/luck_rollers/d20_roller'),
    Dice = require('../lib/dice');

describe('test the d20 roller', function() {

  it('rolls 3d6 in the correct range', function() {
    var basic_luck_parser = new BasicLuckParser('3d6');
    basic_luck_parser.parseLuckString();
    var d20_roller = new d20Roller();

    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(3, 18);
  });

  it('rolls 2d6+d4-3 in the correct range', function() {
    var basic_luck_parser = new BasicLuckParser('2d6+d4-3');
    basic_luck_parser.parseLuckString();
    var d20_roller = new d20Roller();

    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(0, 13);
  });

  it('rolls d20+2d6+2-3d8-3 in the correct range', function() {
    var basic_luck_parser = new BasicLuckParser('d20+2d6+2-3d8-3');
    basic_luck_parser.parseLuckString();
    var d20_roller = new d20Roller();

    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
    expect(d20_roller.roll(basic_luck_parser.result)).to.be.within(-22, 28);
  });

});