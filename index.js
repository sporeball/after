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
const toMS = require("@sindresorhus/to-milliseconds");

var args = process.argv.slice(2);

const time = args[0];
const values = time.match(/\d+/g).map(i => +i);
const units = time.match(/\D+/g);
const ms = toMS({
  hours: values[units.indexOf("h")] || 0,
  minutes: values[units.indexOf("m")] || 0,
  seconds: values[units.indexOf("s")] || 0
})

const date = dayjs().add(ms, "ms").format("MM/DD HH:mm:ss");

const _process = args[1];
const file = args[2];

execa.node("child.js", [ms, _process, file], {
	detached: true
});

console.log(chalk.cyan(`running ${chalk.magenta(`${_process} ${file}`)} in ${time} ${chalk.yellow(`(~ ${date})`)}`))

process.exit(0);
