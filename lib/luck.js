// a luck of dice is the collective term for "some dice" - who knew?

function Luck(luck_string, luck_parser, luck_roller) {
  this.luck_string = luck_string.replace(/\s+/g, '');
  // default to basic parser and d20 roller
  this.luck_parser = (typeof luck_parser !== 'undefined' ? luck_parser : null);
  this.luck_roller = (typeof luck_roller !== 'undefined' ? luck_roller : null);
}

module.exports = Luck;