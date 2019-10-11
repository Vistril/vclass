#!/usr/bin/env node

//module.exports = function() {
    if (process.argv[2]) {
        cls = process.argv[2].includes('.js') ?
            process.argv[2].replace('.js', '') :
            process.argv[2];
    } else {
        throw new Error("Not enough args.")
    }
    
    const interface = require(process.cwd() + '/' + cls + '.js');
    const runner = new interface();
    
    if (runner.main == undefined) {
        throw new ReferenceError("Main method not found in " + process.argv[2] + ".js")
    } else {
        console.log(runner.main());
    }
//}