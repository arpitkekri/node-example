var rect = require('./rectangle');
function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if(l<=0 || b<=0) {
        console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and b = " + b);
    }
    else {
        console.log("The area of the ractangle is " + rect.area(l,b));
        console.log("The perimeter of the ractangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);

var msg = require('./logger.js');
msg.logger('Hello World');

var myLogModule = require('./log.js'); //.js is not a compulsory thing
myLogModule.info('Node.js started');