'use strict';

const scanner = require('node-libnmap');

scanner.nmap('discover', function(err, report) {
  if (err) console.error(err);
  console.log(report);
});