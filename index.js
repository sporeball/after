#!/usr/bin/env node

/*
  index.js
  after core
  copyright (c) 2020 sporeball
  MIT license
*/

// dependencies
const execa = require("execa");

var args = process.argv.slice(2);

const time = args[0];
const units = time.match(/\d+/g).map(i => +i).reverse()
const ms = (units[0] * 1000) + (units[1] * 60000 || 0) + (units[2] * 3600000 || 0);

const _process = args[1];
const file = args[2];

execa.node("child.js", [ms, _process, file], {
	detached: true
});

process.exit(0);
