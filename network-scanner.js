'use strict';

var scanner = require('local-network-scanner');

scanner.scan(function(devices) {
    console.log(devices);
});