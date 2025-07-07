const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    console.log(request.url);
    const parseUrl = url.parse(request.url, true)
    const pathName = parseUrl.pathname;
    const queryParams = parseUrl.query;

    if(pathName === '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return; 
    }
    console.log(queryParams)

    if(request.method ==='POST'){
        response.write('Hello World, Henrico!');
        response.end();
    }
    else if(request.method === 'GET'){
        response.write('A soma e: ' + (Number(queryParams.num) + Number(queryParams.num2)));
        response.end();
    }
    
}).listen(9090);