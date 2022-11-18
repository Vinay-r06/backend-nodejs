const http =require('http'); 
const server=http.createServer((req, res) => {
res.end('vinay from node');
});

server.listen(8000, '127.0.0.1', () => {                      // port number, then ip address standard number 127.0.0.1, callback function anything to print...
    console.log('listening requests from port 8000');
})
