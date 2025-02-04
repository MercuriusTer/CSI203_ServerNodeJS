// console.log('Hello Start Node.js');
// const result = "xxx";
// console.log('Result: ', result);

const os = require('os');
const hostname = os.hostname();

// Defind Server
const http = require('http');
const IPServer = '192.168.1.98';
const port = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Laboratory : Part Create Node.js Server
    Create by 66080240 Woradech Ardvichai`);
});

server.listen(port, IPServer, () => {
    console.log('Hostname: '+ hostname);
    console.log("Platform: " + os.platform());
    console.log("Architecture: " + os.arch());
    console.log("CPU Core: " + os.cpus().length);
    console.log("RAM: " + os.totalmem() / 1024 / 1024 / 1024 + " GB");
    console.log(`Server running at http://${IPServer}:${port}/`);
});