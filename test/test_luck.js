var expect = require('chai').expect,
    Luck = require('../lib/luck'),
    BasicLuckParser = require('../lib/luck_parsers/basic_luck_parser'),
    d20Roller = require('../lib/luck_rollers/d20_roller'),
    Dice = require('../lib/dice');

describe('test the luck object', function() {

  it('sets the raw luck string correctly', function() {
    var luck1 = new Luck('2d6+1');
    expect(luck1.luck_string).to.equal('2d6+1');

    var luck2 = new Luck('3d10 + 5');
    expect(luck2.luck_string).to.equal('3d10+5');
  });

  it('defaults the luck parser correctly', function() {
    // default when not specified
    var luck1 = new Luck('2d6+1');
    expect(luck1.luck_parser).to.be.an.instanceOf(BasicLuckParser);

    // default when null passed
    var luck2 = new Luck('2d6+1', null);
    expect(luck2.luck_parser).to.be.an.instanceOf(BasicLuckParser);
  });

  it('sets the luck parser correctly', function() {
    var luck1 = new Luck('2d6+1', new BasicLuckParser());
    expect(luck1.luck_parser).to.be.an.instanceOf(BasicLuckParser);
  });

  it('defaults the luck parser correctly', function() {
    // default when not specified
    var luck1 = new Luck('2d6+1');
    expect(luck1.luck_roller).to.be.an.instanceOf(d20Roller);

    // default when null passed
    var luck2 = new Luck('2d6+1', null, null);
    expect(luck2.luck_parser).to.be.an.instanceOf(BasicLuckParser);
    expect(luck2.luck_roller).to.be.an.instanceOf(d20Roller);
  });

  it('sets the luck roller correctly', function() {
    var luck1 = new Luck('2d6+1', null, new d20Roller());
    expect(luck1.luck_roller).to.be.an.instanceOf(d20Roller);
  });

  // it('rolls correctly', function() {

  // });

});