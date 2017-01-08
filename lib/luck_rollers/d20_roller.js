// roller which models the D20 system

function d20Roller() {
  // empty constructor
}

d20Roller.prototype.roll = function(luck_parser_result) {
  // for each element in the luck parser result, roll where needed then sum
  var result = 0;

  for (var i = 0; i < luck_parser_result.length; i++) {
    if (typeof luck_parser_result[i][0] === 'object') {
      result += luck_parser_result[i][0].roll() * luck_parser_result[i][1];
    } else {
      result += luck_parser_result[i][0] * luck_parser_result[i][1];
    }
  }

  return result;

}

module.exports = d20Roller;