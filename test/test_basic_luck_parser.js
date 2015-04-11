var expect = require('chai').expect,
    BasicLuckParser = require('../lib/luck_parsers/basic_luck_parser');

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

});
