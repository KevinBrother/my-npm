const { add } = require('npm-test-demo-inner');

function first_add(a, b) {
  return add(a, b);
}

exports.first_add = first_add;
