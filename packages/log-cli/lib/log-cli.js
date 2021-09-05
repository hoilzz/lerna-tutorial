#!/usr/bin/env node

const { program } = require('commander');
const _ = require('lodash');
const LogCore = require('log-core');

module.exports = logCli;

function logCli() {
  // TODO
  program.action((cmd) => LogCore());
  program.parse(process.argv);
  console.log('lodash.random(): ', _.random());
}

logCli();
