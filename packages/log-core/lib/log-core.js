'use strict';

const { red } = require('chalk');
const { print } = require('log-util');

module.exports = logCore;

function logCore() {
  console.log(print());
  console.log(red('🚀 Running Core!'));
}
