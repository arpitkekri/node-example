var msg = require('./logger.js');
msg.logger('Hello World');

var myLogModule = require('./log.js'); //.js is not a compulsory thing
myLogModule.info('Node.js started');
myLogModule.error("404 Not Found");
myLogModule.warning(`This is a Warning`);

var person = require('./data.js');
var person1 = new person('James', 'Bond');
console.log(person1.fullName());