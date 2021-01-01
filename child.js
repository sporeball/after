/*
  child.js
  after child process
  copyright (c) 2021 sporeball
  MIT license
*/

// dependencies
const execa = require("execa");

// arguments passed from parent
var args = process.argv.slice(2);
const ms = args[0];
const _process = args[1];
const file = args[2];

setTimeout(function() {
	execa(_process, [file], {
		detached: false
	});
}, ms);
