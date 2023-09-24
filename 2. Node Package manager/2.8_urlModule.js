/* ei module er kahini holo jekono url theke url module bebohar kore url parse use kore query obj and path soho sob ber korte parri */

const http = require('http');
const url = require('url');
const PORT = 5000;

const server = http.createServer((req, res) => {

    const adress_url = 'http://localhost:5000/contact?name=rkbokul&country=bangladesh';
    
    const parse_url = url.parse(adress_url, true)
    // console.log(parse_url)

    const queryObj = parse_url.query;
    console.log(queryObj)


})
// console.log(url)

server.listen(PORT,()=>{
    console.log(`server is Running`)
})



/*
url er hisab nikash:

/contact?name=rkbokul&country=bangladesh
/about
/product
/ -etake root ba home directory bole

*/