#!/usr/bin/env node
const { add } = require('../index');

console.log(add(+process.argv[2], +process.argv[3]));
