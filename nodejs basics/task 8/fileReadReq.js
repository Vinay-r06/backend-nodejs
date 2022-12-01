//  assignment read from file and show it on browser display....


const http =require('http');
const  fs  = require('fs'); 
 const server=http.createServer((req, res) => {
const url =req.url;
 const method = req.method;

if(url==='/'){

fs.readFile('message.txt',{encoding:'utf-8'}, (err,data)=>{
     if(err){
          console.log(err);
     }
  console.log(data);
res.write('<html>'); 
res.write('<head><title>Enter Message</title></header>')
res.write(`<body>${data}</body>`)
res.write('<boby><form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form></boby>')                      // name="message"...if we give that input a name which we should, message, it will also automatically put that message  into the request it sends to our server....the name does not have to be "message"..it will add any input data to the request and make it accessible via the assigned name...
res.write('</html>');
return res.end();
})
 }
                                                                                                             
else if(url==='/message' && method ==='POST'){
const body = [];

req.on('data', (chunk)=>{
console.log(chunk);
body.push(chunk);
 });

return req.on('end', ()=>{
const parseBody= Buffer.concat(body).toString();
const message=parseBody.split('=')[1];                              //  u will right side of the equal sign  means --> message= hello----- u will get-> hello
          //console.log(message)
          // console.log(parseBody);
fs.writeFile('message.txt', message, (err)=>{                          // using filewrite which gives 3 rd arguments as function ..call back function which recevies error....if error it will return error response ..if no error return normal response...
     res.statusCode=302;                                              // normal response only sent  only done working with the file ....function excute only when the message write is done.....here not handling error because here no error will come...normal response using...
     res.setHeader('Location', '/');                              
     return res.end();                                             // event listener with method and functions---> event listener--req.on('end')...method or function---()=>{ const parseBody=buff   to  return res.end();}  method or function will be excuted once done prasing the request...that function  will excutes in sometime future..
                                                                   // we had another event listener, this nested function..which excuted once done writing the file
                                                                    // // we had event drive architecture(eda):--> err=>{  inside function}---eda u will tell nodejs pls do something-- it go and offload that process to the operating system which is use multi-threading...and then continue its event loop to listen for event callbacks...and then always come back once an operation is done by operating system... does something in the callback({}inside callback function, wat code is excuted), like send response here code..

});                                                      

});     


 }       
else{
res.setHeader('Content-Type', 'text/html'); 
res.write('<html>'); 
res.write('<head><title>my first page</title></header>')
res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
res.write('</html>');
res.end();
}                                              
 });
                                                                                                             
                                                         
server.listen(3000) ;


//  output: hello+rahul---in browser above box will shown wat is in the file will print in the display..                      
//      in vs terminal : hello+rahul--- shows wat is in the file will print...
// 


// file read and write is asynchronous..