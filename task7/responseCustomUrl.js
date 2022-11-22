
const http =require('http'); 
const server=http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  let url=req.url;
  res.setHeader('Content-Type', 'text/html');

  if(url=='/home'){
  res.write('<html>'); 
  res.write('<head><title>my first page</title></header>')
  res.write('<boby><h1>Welcome home </h1></boby>')
  res.write('</html>');
}

  else if(url=='/about'){
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>'); 
    res.write('<head><title>my first page</title></header>')
    res.write('<boby><h1>Welcome to About Us page </h1></boby>')
    res.write('</html>');
  }
  else if(url=='/node'){
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>'); 
    res.write('<head><title>my first page</title></header>')
    res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
    res.write('</html>');

  }
  res.end();
 });

 server.listen(4000, 'localhost', () => {                      // port number, then ip address standard number 127.0.0.1, callback function anything to print...
     console.log('listening requests from port 8000');
 })

