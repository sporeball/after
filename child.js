/*
  child.js
  after child process
  copyright (c) 2020 sporeball
  MIT license
*/

// dependencies
const execa = require("execa");

// arguments passed from parent
var args = process.argv.slice(2);
const _process = args[0];
const file = args[1];

setTimeout(function() {
	execa(_process, [file], {
		detached: false
	});
}, 1000);
