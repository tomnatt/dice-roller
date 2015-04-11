// a luck of dice is the collective term for "some dice" - who knew?
var BasicLuckParser = require('./luck_parsers/basic_luck_parser');

function Luck(luck_string, luck_parser, luck_roller) {
  this.luck_string = luck_string.replace(/\s+/g, '');

  // default to basic parser and d20 roller
  this.luck_parser = (typeof luck_parser !== 'undefined' ? luck_parser : new BasicLuckParser());
  this.luck_roller = (typeof luck_roller !== 'undefined' ? luck_roller : null);

  // parse the string
  this.luck_parser.setLuckString(this.luck_string);
  this.luck_parser.parseLuckString();

  this.all_dice = this.luck_parser.result;
}

module.exports = Luck;