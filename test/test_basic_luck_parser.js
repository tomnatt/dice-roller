var expect = require('chai').expect,
    BasicLuckParser = require('../lib/luck_parsers/basic_luck_parser'),
    Dice = require('../lib/dice');

describe('test the basic luck parser', function() {

  it('sets the raw string correctly', function() {
    var basic_luck_parser_1 = new BasicLuckParser('2d6+3');
    expect(basic_luck_parser_1.luck_string).to.equal('2d6+3');

    var basic_luck_parser_2 = new BasicLuckParser('3d10 + 5');
    expect(basic_luck_parser_2.luck_string).to.equal('3d10+5');
  });

  it('sets the raw string correctly via the setter method', function() {
    var basic_luck_parser_1 = new BasicLuckParser();
    basic_luck_parser_1.setLuckString('2d6+3');
    expect(basic_luck_parser_1.luck_string).to.equal('2d6+3');

    var basic_luck_parser_2 = new BasicLuckParser();
    basic_luck_parser_2.setLuckString('3d10 + 5');
    expect(basic_luck_parser_2.luck_string).to.equal('3d10+5');
  });

  it('defaults the raw string correctly', function() {
    var basic_luck_parser = new BasicLuckParser();
    expect(basic_luck_parser.luck_string).to.equal('');
  });

  it('defaults the raw string correctly via the setter method', function() {
    var basic_luck_parser = new BasicLuckParser('2d6+3');
    basic_luck_parser.setLuckString();
    expect(basic_luck_parser.luck_string).to.equal('');
  });

  it('returns an array even if parse not called', function() {
    var basic_luck_parser = new BasicLuckParser('2d6+3');
    expect(basic_luck_parser.result).to.be.an.instanceOf(Array);
  });

  it('parses the luck string correctly', function() {
    var basic_luck_parser_1 = new BasicLuckParser('d6+2d10+3');
    basic_luck_parser_1.parseLuckString();
    expect(basic_luck_parser_1.result).to.be.an.instanceOf(Array);
    expect(basic_luck_parser_1.result).to.have.length(4);
    expect(basic_luck_parser_1.result[0]).to.eql([new Dice(6), 1]);
    expect(basic_luck_parser_1.result[1]).to.eql([new Dice(10), 1]);
    expect(basic_luck_parser_1.result[2]).to.eql([new Dice(10), 1]);
    expect(basic_luck_parser_1.result[3]).to.eql([3, 1]);

    var basic_luck_parser_2 = new BasicLuckParser('d4+3d10-1d8+3-6');
    basic_luck_parser_2.parseLuckString();
    expect(basic_luck_parser_2.result).to.be.an.instanceOf(Array);
    expect(basic_luck_parser_2.result).to.have.length(7);
    expect(basic_luck_parser_2.result[0]).to.eql([new Dice(4), 1]);
    expect(basic_luck_parser_2.result[4]).to.eql([new Dice(8), -1]);
    expect(basic_luck_parser_2.result[1]).to.eql([new Dice(10), 1]);
    expect(basic_luck_parser_2.result[5]).to.eql([3, 1]);
    expect(basic_luck_parser_2.result[6]).to.eql([6, -1]);

    var basic_luck_parser_3 = new BasicLuckParser('-d4+3-6');
    basic_luck_parser_3.parseLuckString();
    expect(basic_luck_parser_3.result).to.be.an.instanceOf(Array);
    expect(basic_luck_parser_3.result).to.have.length(3);
    expect(basic_luck_parser_3.result[0]).to.eql([new Dice(4), -1]);
    expect(basic_luck_parser_3.result[1]).to.eql([3, 1]);
    expect(basic_luck_parser_3.result[2]).to.eql([6, -1]);
  });

});
