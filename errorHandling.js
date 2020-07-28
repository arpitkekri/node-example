// method 1: by process.on
var fs = require('fs');

fs.readFile("input.txt", "utf8", function(err, data) {
    if(err) {
        throw err;
    }
    console.log(data);
});

process.on("uncaughtException", function(err) {
    console.log("The exception was caught!");
});

// Method 2: by domain
var domain = require("domain").create();

domain.run(function(){
    fs.readFile("iput.txt", "utf8", function(err, data) {
        if(err) {
            throw err;
        }
        console.log(data);
    });
});

domain.on("error",function(err) {
    console.log("The exception was caught!");
});