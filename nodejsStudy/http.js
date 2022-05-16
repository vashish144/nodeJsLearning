let http = require('http');

let server = http.createServer((req, res) => {
 res.write('<h1>Hello World</h1>');
 res.write('<h1>my darling love you</h1>');
 res.end();
})
server.listen(1234);