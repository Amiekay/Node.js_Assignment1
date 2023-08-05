const path = require('path');
const os = require('os');
const process = require('process')


// Print out the current working directory
const cwd = path.resolve();
console.log(cwd);

// Print out the separator of a given file path
const pathSeperator = path.sep;
console.log(pathSeperator);

// Print out the extension name of a file path
const extName = path.extname('/home/tech/Node.js_Assignment1/modules.js');
console.log(extName);

// Print out the process id of the current running process

const processID = process.pid;
console.log(processID)

// Print out the user information of the os

const user = os.userInfo()
console.log(user)


// Print out the platform of an operating system

const platform = os.platform()
console.log(platform)
