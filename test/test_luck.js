var expect = require('chai').expect,
    Luck = require('../lib/luck'),
    Dice = require('../lib/dice');

describe('test the luck object', function() {

  it('sets the raw luck string correctly', function() {
    var luck1 = new Luck('2d6+1');
    expect(luck1.luck_string).to.equal('2d6+1');

    var luck2 = new Luck('3d10 + 5');
    expect(luck2.luck_string).to.equal('3d10+5');
  });

  // it('sets the luck parser correctly', function() {

  // });

  // it('sets the luck roller correctly', function() {

  // });

  // it('defaults the luck parser correctly', function() {

  // });

  // it('defaults the luck parser correctly', function() {

  // });

  // it('rolls correctly', function() {

  // });

});