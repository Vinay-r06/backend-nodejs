const http =require('http'); 
const server=http.createServer((req, res) => {
console.log(req.url, req.method, req.headers); 
res.setHeader('Content-Type', 'text/html');                    //set new header ....'content-type' is default header which browser can understand..
res.write('<html>');
res.write('<head><title>my first page</title></header>')
res.write('<boby><h1>hello from my nodejs server </h1></boby>')
 res.write('</html>');
 res.end();
});

 server.listen(3000)           