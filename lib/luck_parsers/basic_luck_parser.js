function BasicLuckParser(luck_string) {
  this.luck_string = (typeof luck_string !== 'undefined' ? luck_string : '');
  this.result = [];
}

BasicLuckParser.prototype.setLuckString = function(luck_string) {
  this.luck_string = luck_string;
};

BasicLuckParser.prototype.parseLuckString = function() {
  // hey, we should parse
};

module.exports = BasicLuckParser;