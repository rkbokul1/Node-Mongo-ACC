const http = require('http')

const server = http.createServer((req, res) => {
    // res.end('Hello NodeJs')
    if (req.url == '/') {
        res.writeHead(200, { 'content-type': 'text/html' }) //amra ekhane response hisebe html dicci. amra chaile ekhan theke json data o dite pari.
        res.write('<p>This is home page</p>');
        res.end()
    }
    //json kivabe patabo:
    if (req.url == '/json') {
        res.writeHead(200, { 'content-type': 'application/json' }) 
        res.write(JSON.stringify({course : 'acc'}));
        res.end()
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<p>This is Contact page</p>');
        res.end()
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<p>This is about page</p>');
        res.end()
    }
    else {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<p>Req-Error: 404</p>');
        res.end()
    }
})

server.listen(5000);