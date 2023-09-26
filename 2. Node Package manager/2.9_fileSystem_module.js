/* eii module a amra dekhbo nodejs er file system kivabe kaj kore.
Nodejs er file system duivabe kaj kore.
1. synchronus
2. Asynchronous.
----amra asynchronous diye file read kora sikhbo. duitai same sudho asynchronous a extra callback function dite hobe ja call back return korbe. r synchronous a callback deya lagena, extra hisebe sudhu sync keyword add kora lagbe.

    fs.readFile(filename, [option], callback)   |   
    fs.writeFile(filename, [option], callback)
    fs.rename(oldPath, newPath, callback)
    fs.exists(path, callback)
    fs.appendFile(file, data, [option], callback)

    sync
    fs.readFileSync(filename, [option])   |   
    fs.writeFileSync(filename, [option])
    fs.renameSync(oldPath, newPath)
    fs.existsSync(path, callback)
    fs.appendFileSync(file, data, [option])


 */

const http = require('http');
const fs = require('fs');
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('data.txt', (data, err) => {
            if(err){
                res.write('Failed to read data');
                res.end()
            }else{
                res.end(data);
                res.end()
            }
        })
    }
})

server.listen(port, () => {
    console.log(`server is running on port -${port}`)
})