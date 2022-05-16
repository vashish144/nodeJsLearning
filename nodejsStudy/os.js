let os = require('os');
console.log("osPlatForm---->",os.platform());
console.log(`osArchitecture---->${os.arch()}`);
console.log(`osCpu---->${os.cpus().length} core`);
console.log(`osUpTime---->${os.uptime()}`);
console.log(`osFreeMemory---->${os.freemem()}`);