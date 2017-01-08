// a luck of dice is the collective term for "some dice" - who knew?
var BasicLuckParser = require('./luck_parsers/basic_luck_parser'),
    d20Roller = require('./luck_rollers/d20_roller');

function Luck(luck_string, luck_parser, luck_roller) {
  this.luck_string = luck_string;

  // default to basic parser and d20 roller
  this.luck_parser = (typeof luck_parser !== 'undefined' && luck_parser != null ? luck_parser : new BasicLuckParser());
  this.luck_roller = (typeof luck_roller !== 'undefined' && luck_roller != null ? luck_roller : new d20Roller());

  // parse the string
  this.luck_parser.setLuckString(this.luck_string);
  this.luck_parser.parseLuckString();

  // this.result = luck_roller.roll(luck_parser.result);
}

module.exports = Luck;