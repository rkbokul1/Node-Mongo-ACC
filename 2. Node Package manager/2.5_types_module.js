/*
=> different types of modules:
1. local module: jeta ager video te export import kore amra banalam
2. Core module: server er http module, file system module, url, path ,module etc. egula npm website a pabo
*/

// eta core module

const http = require('http')

const server = http.createServer(function(){
    console.log('hello server')
})

server.listen(5000);


// 3. Third-party module. Jegula npm use kore amra onek devoloper er module use korte pari and sob kaj easily solve korte pari. Third party module gula sob package.json file a paoya jay.