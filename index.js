var msg = require('./logger.js');
msg.logger('Hello World');

var myLogModule = require('./log.js'); //.js is not a compulsory thing
myLogModule.info('Node.js started');
myLogModule.error("404 Not Found");
myLogModule.warning(`This is a Warning`);

var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);


