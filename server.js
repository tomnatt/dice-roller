#!/usr/bin/env node

var app = require('./app');

app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
  console.log('I am listening');
});