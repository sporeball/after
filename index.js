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

execa.node("child.js", [args[0], args[1]], {
	detached: true
});

process.exit(0);
