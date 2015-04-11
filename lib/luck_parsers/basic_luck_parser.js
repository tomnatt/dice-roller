function BasicLuckParser(luck_string) {
  this.luck_string = (typeof luck_string !== 'undefined' ? fixLuckString(luck_string) : '');
  this.result = [];
}

BasicLuckParser.prototype.setLuckString = function(luck_string) {
  this.luck_string = (typeof luck_string !== 'undefined' ? fixLuckString(luck_string) : '');
};

BasicLuckParser.prototype.parseLuckString = function() {
  // hey, we should parse
};

function fixLuckString(luck_string) {
  return luck_string.replace(/\s+/g, '');
}

module.exports = BasicLuckParser;