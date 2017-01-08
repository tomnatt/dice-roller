// basic parser will handle XdY +/- Z
// no parenthesis or multiplication / division

var Dice = require('../dice');

function BasicLuckParser(luck_string) {
  this.setLuckString(luck_string);
  this.result = []; // horrible naming
}

BasicLuckParser.prototype.setLuckString = function(luck_string) {
  this.luck_string = (typeof luck_string !== 'undefined' ? fixLuckString(luck_string) : '');
};

BasicLuckParser.prototype.parseLuckString = function() {

  // add a space before each operator then split on that space
  var components = this.luck_string.replace(/\+/g, ' +').replace(/-/g, ' -').trim().split(' ');

  // for each component...
  for (var i = 0; i < components.length; i++) {

    var component = components[i];

    // ensure there is a modifier
    if (!/^[\+|-]/.test(components[i])) {
      component = '+' + component;
    }

    // set the modifier (+ or -)
    var res = [null, 1];
    if (/^-/.test(components[i])) {
      res = [null, -1];
    }

    // remove the modifier
    component = component.substring(1);

    // a dice will match XdY
    if (/\d*d\d+/.test(component)) {

      var dice = component.split('d');
      var number = (dice[0] != '' ? parseInt(dice[0]) : 1);
      var size = parseInt(dice[1]);

      // create the dice and add them
      for (var j = 0; j < number; j++) {
        res[0] = new Dice(size);
        this.result.push(res);
      }

    } else {
      // just add the number
      res[0] = parseInt(component);
      this.result.push(res);
    }
  }
};

function fixLuckString(luck_string) {
  return luck_string.replace(/\s+/g, '');
}

module.exports = BasicLuckParser;