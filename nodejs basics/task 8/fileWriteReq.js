//  Routing and Requests


                                //A GET request is automatically sent when you click a link or enter a url, a POST request has to be set up by you by creating such a form,


const http =require('http'); 
const server=http.createServer((req, res) => {
const url =req.url;
if(url=='/'){
    
      res.write('<html>'); 
      res.write('<head><title>Enter Message</title></header>')
      res.write('<boby><form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form></boby>')                      // name="message"...if we give that input a name which we should, message, it will also automatically put that message  into the request it sends to our server....the name does not have to be "message"..it will add any input data to the request and make it accessible via the assigned name...

     
      res.write('</html>');
      return res.end();
}

res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>'); 
    res.write('<head><title>my first page</title></header>')
    res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
    res.write('</html>');
    res.end();
  });

  server.listen(3000) ;   


// output: when u gave input to that form it will excute "welcome to my nodejs project"...because now the url is /message and /message does not make it into this if statement and therefore this code runs...







//redirecting requests



const http =require('http');
const  fs  = require('fs'); 
const server=http.createServer((req, res) => {
const url =req.url;
const method = req.method;
if(url==='/'){
    
      res.write('<html>'); 
      res.write('<head><title>Enter Message</title></header>')
      res.write('<boby><form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form></boby>')                      // name="message"...if we give that input a name which we should, message, it will also automatically put that message  into the request it sends to our server....the name does not have to be "message"..it will add any input data to the request and make it accessible via the assigned name...
      res.write('</html>');
      return res.end();
}

if(url==='/message' && method ==='POST'){
      fs.writeFileSync('message.txt','DUMMY');
      res.statusCode=302;
      res.setHeader('Location', '/');                          //we set the location, this is also a default header accepted by the browser..../-->use the host we're already running on
      return res.end();

}
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>'); 
    res.write('<head><title>my first page</title></header>')
    res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
    res.write('</html>');
    res.end();
  });

  server.listen(3000) ; 


//output: after excuete --message.txt will file will create and in that "dummy" willl there...  





// parsing Request Bodies..




                                                          
                             
                                                  

 const http =require('http');
 const  fs  = require('fs'); 
 const server=http.createServer((req, res) => {
 const url =req.url;
 const method = req.method;
 if(url==='/'){
                                                        
res.write('<html>'); 
res.write('<head><title>Enter Message</title></header>')
res.write('<boby><form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form></boby>')                      // name="message"...if we give that input a name which we should, message, it will also automatically put that message  into the request it sends to our server....the name does not have to be "message"..it will add any input data to the request and make it accessible via the assigned name...
res.write('</html>');
return res.end();
    }
                                                    
if(url==='/message' && method ==='POST'){
 const body = [];
 req.on('data', (chunk)=>{
      console.log(chunk);
      body.push(chunk);
 });
 req.on('end', ()=>{
      const parseBody= Buffer.concat(body).toString();
      console.log(parseBody);
 });     
fs.writeFileSync('message.txt','DUMMY');
res.statusCode=302;
res.setHeader('Location', '/');                          //we set the location, this is also a default header accepted by the browser..../-->use the host we're already running on
return res.end();
                                                    
      }

res.setHeader('Content-Type', 'text/html'); 
res.write('<html>'); 
res.write('<head><title>my first page</title></header>')
res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
res.write('</html>');
res.end();

});
                                                    
            server.listen(3000) ; 



//output:  <Buffer 6d 65 73 73 61 67 65 3d 62 67 62 67 62 67>        --> console.log(chunk);
//          message=bgbgbg           ....key value pair...key is message( we named as "message") and value is user entered            -->  console.log(parseBody);   







const http =require('http');
 const  fs  = require('fs'); 

 const server=http.createServer((req, res) => {
 const url =req.url;
 const method = req.method;
 if(url==='/'){
                                                        
res.write('<html>'); 
res.write('<head><title>Enter Message</title></header>')
res.write('<boby><form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form></boby>')                      // name="message"...if we give that input a name which we should, message, it will also automatically put that message  into the request it sends to our server....the name does not have to be "message"..it will add any input data to the request and make it accessible via the assigned name...
res.write('</html>');
return res.end();
    }
                                                    
if(url==='/message' && method ==='POST'){
 const body = [];
 req.on('data', (chunk)=>{
      console.log(chunk);
      body.push(chunk);
 });
 req.on('end', ()=>{
      const parseBody= Buffer.concat(body).toString();
      const message=parseBody.split('=')[1];                              //  u will right side of the equal sign  means --> message= hello----- u will get-> hello
      //console.log(message)
     // console.log(parseBody);
      fs.writeFileSync('message.txt', message);
 });     

res.statusCode=302;
res.setHeader('Location', '/');                          //we set the location, this is also a default header accepted by the browser..../-->use the host we're already running on
return res.end();
                                                    
      }

res.setHeader('Content-Type', 'text/html'); 
res.write('<html>'); 
res.write('<head><title>my first page</title></header>')
res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
res.write('</html>');
res.end();

});
                                                    

server.listen(3000) ; 


//output: u will get output when run localhost runs...in the vs code in message.txt file u will see wat u typed in submit box...message.txt file will create in vs code....








// understanding event driven code excuetion...




const http =require('http');
 const  fs  = require('fs'); 

 const server=http.createServer((req, res) => {
 const url =req.url;
 const method = req.method;
 if(url==='/'){
                                                        
res.write('<html>'); 
res.write('<head><title>Enter Message</title></header>')
res.write('<boby><form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form></boby>')                      // name="message"...if we give that input a name which we should, message, it will also automatically put that message  into the request it sends to our server....the name does not have to be "message"..it will add any input data to the request and make it accessible via the assigned name...
res.write('</html>');
return res.end();
    }
                                                    
if(url==='/message' && method ==='POST'){
 const body = [];
 req.on('data', (chunk)=>{
      console.log(chunk);
      body.push(chunk);
 });
 req.on('end', ()=>{
      const parseBody= Buffer.concat(body).toString();
      const message=parseBody.split('=')[1];                              //  u will right side of the equal sign  means --> message= hello----- u will get-> hello
      //console.log(message)
     // console.log(parseBody);
      fs.writeFileSync('message.txt', message);
 });     

res.statusCode=302;
res.setHeader('Location', '/');                          //we set the location, this is also a default header accepted by the browser..../-->use the host we're already running on
return res.end();
                                                    
      }

res.setHeader('Content-Type', 'text/html'); 
res.write('<html>'); 
res.write('<head><title>my first page</title></header>')
res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
res.write('</html>');
res.end();

});
                                                    

server.listen(3000) ; 




//explanation for above 

// fs.writeFileSync('message.txt', message);  --> this will line  excuete after  -->res.statusCode=302;
                                                                             //    res.setHeader('Location', '/'); 
                                                                           //      return res.end();
                                             // it will even excute after  we already sent a response                                    
                                               // if we do something in the event listner it should be influence response...
// so crt way to code is below

// return req.on('end', ()=>{
//      const parseBody= Buffer.concat(body).toString();
//      const message=parseBody.split('=')[1];   
//      fs.writeFileSync('message.txt', message);
//      res.statusCode=302;                                               //we should move response code into event listner...if had such dependancy
//      res.setHeader('Location', '/');                         
//      return res.end(); 
// });
// }
// res.setHeader('Content-Type', 'text/html');         

// if pass function to function ...--> createserver(req,res)
// asynchronous excuetion ----> when encounter --> res----> this will add a new event listener internally...
                                                          // it manages all listners internaaly
                                                         // end event on the request--> which will triggers once nodejs is done parsing the request..
                                                         // and after function will call once its done...
                                                         //nodejs having some internal registrty of events and listners to these events...
                                                         //  function like this ----()=>{
                                                         //                         const parseBody= Buffer.concat(body).toString();
                                                         //                           const message=parseBody.split('=')[1];   
                                                         //                             fs.writeFileSync('message.txt', message);  

                                                         //                                     });
                                                         //                                            }
                                                         //      function like this   called----> listener
                                                         // when nodejs is done prasing request it will go through that registry and see im done with request...should now send the end event...
                                              
                                                         // see which listeners i have for that  and excuete function that is registered for that and call them..
                                                         // 1st----> go to --> if satement and if true inside if
                                                         // 2nd ---->       and then register 2 handlers and immediately excuete these 2 functions...fun just register internally in its event registry and then straight next line....res.setHeader()
                                                         //after excute = it will excute --res.setHeader
                                                         /// error --> header cant set-- because already moved along and excuted...after this tried to again send response-->res.status=302... which is too late because already excuted--> res.setHeader()-- to ---res.end()
                                                         // y this happens because res.on(end)--->()=>{

                                                         //   }
                                                         // this is call back called sometime in future....the setup is impoertant otherwise node should be wait untill it done....not able handle other incoming requests..untill its done..we dont want block code excuetion..
                                                         
                                                         //We always want to be in that wait for new events, loop the event loop and then only execute code once its due to be excuted..never block that event loop for too long time...
                                                         
                                                         // so to avoid this return req.on()..and after res.setHeader will not excute..if u put return ...




// filewriteSync and remaining code putting inside res.on 


const http =require('http');
const  fs  = require('fs'); 
const server=http.createServer((req, res) => {
const url =req.url;
const method = req.method;

if(url==='/'){         
res.write('<html>'); 
 res.write('<head><title>Enter Message</title></header>')
res.write('<boby><form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form></boby>')                      // name="message"...if we give that input a name which we should, message, it will also automatically put that message  into the request it sends to our server....the name does not have to be "message"..it will add any input data to the request and make it accessible via the assigned name...
res.write('</html>');
return res.end();
 }
                                                                                                             
if(url==='/message' && method ==='POST'){
const body = [];

req.on('data', (chunk)=>{
console.log(chunk);
body.push(chunk);
 });

req.on('end', ()=>{
const parseBody= Buffer.concat(body).toString();
const message=parseBody.split('=')[1];                              //  u will right side of the equal sign  means --> message= hello----- u will get-> hello
          //console.log(message)
          // console.log(parseBody);
fs.writeFileSync('message.txt', message);
res.statusCode=302;
res.setHeader('Location', '/');
return res.end();
});     
                                                                                                                                                                
 }                                                     
res.setHeader('Content-Type', 'text/html'); 
res.write('<html>'); 
res.write('<head><title>my first page</title></header>')
res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
res.write('</html>');
res.end();
                                                         
 });
                                                                                                             
                                                         
server.listen(3000) ; 
                                                         

//output:   Welcome to my Node Js project        ---in browser..
//  Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client ....-->           because explanation is above...it directly excueting nect line...so use return in res.on
//  code: 'ERR_HTTP_HEADERS_SENT'




// blocking and non blocking.....



// assign "return"  to res.end and 3rd argument as function error object...and using "filewrite"


const http =require('http');
const  fs  = require('fs'); 
 const server=http.createServer((req, res) => {
const url =req.url;
 const method = req.method;

if(url==='/'){         
res.write('<html>'); 
 res.write('<head><title>Enter Message</title></header>')
res.write('<boby><form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form></boby>')                      // name="message"...if we give that input a name which we should, message, it will also automatically put that message  into the request it sends to our server....the name does not have to be "message"..it will add any input data to the request and make it accessible via the assigned name...
res.write('</html>');
return res.end();
 }
                                                                                                             
if(url==='/message' && method ==='POST'){
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
res.setHeader('Content-Type', 'text/html'); 
res.write('<html>'); 
res.write('<head><title>my first page</title></header>')
res.write('<boby><h1>Welcome to my Node Js project </h1></boby>')
res.write('</html>');
res.end();
                                                         
 });
                                                                                                             
                                                         
server.listen(3000) ; 
                       



// output: hello+vinay --> created in file vs code
       // nothing just input box after given input----->  in browser 



// explanation for above topic..

// fs.writeFileSync('message.txt', message);---> writefilesync means sync--  synchronous...special method which will actually block code execution until this file is created.
// working with files in 2 modes..
// synchronos mode : we block excuetion of the next line of code untill this file is done..
// but large files megabytes cant wait this much takes slow server if u do read or write..if block excuetion other code will not contuine untill that file operation is done...
//new incoming requests of others user would no tbe handled until file opertaion is done...
//better use:= ---> writeFile--->gives accept the path, data, and callback as 3rd argument...
// callback is function should excute when its done..

// nodejs implicitly registers an event listener for us
// 3rd argument -- function as error object which will be null is no error...
// if error occured u will get it and handled here...
// below code for error handle and 3rd argument as function...for fileWrite...






