#!/usr/bin/env node

/*
  index.js
  after core
  copyright (c) 2020 sporeball
  MIT license
*/

// dependencies
const chalk = require("chalk");
const execa = require("execa");
const dayjs = require("dayjs");
const pretty = require("pretty-ms");

var args = process.argv.slice(2);

const time = args[0];
const units = time.match(/\d+/g).map(i => +i).reverse()
const ms = (units[0] * 1000) + (units[1] * 60000 || 0) + (units[2] * 3600000 || 0);

const date = dayjs().add(ms, "ms").format("MM/DD HH:mm:ss");

const _process = args[1];
const file = args[2];

execa.node("child.js", [ms, _process, file], {
	detached: true
});

console.log(chalk.cyan(`running ${chalk.magenta(`${_process} ${file}`)} in ${pretty(ms)} ${chalk.yellow(`(~ ${date})`)}`))

process.exit(0);
