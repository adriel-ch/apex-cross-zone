"use strict" 

const helper = require('api-test-helper').apiHelper;

let params = require('./data.json');

Promise.resolve()
    // start the timer
    .then(function() { return helper.startTestTimer() })

    .then(function() { return helper.performTest(params) })

    .then(helper.displayTestResult).then(message => console.log("\n" + message))
    .then(helper.displayElapseTime).then(message => console.log("\n" + message + "\n"))
    .catch(function(error) { 
        console.log(error);
    })
;
