/* 1. row nodejs diye server create korbo

*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello Nodejs')
});

const port = 7000;
server.listen(`server is running port ${port}`)