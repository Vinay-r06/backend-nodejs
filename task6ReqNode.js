const http =require('http');  

 const server=http.createServer((req,res)=>{
 console.log('vinay');                                      // open browser localhost:3000...u will not get anything because we are not return any html page...after opening browser see vs code terminal..there will be lot of output...because u  (req) console that

  });

 server.listen(4000) 
