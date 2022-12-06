//  adding middleware



//middleware means that an incoming request is automatically funneled through a bunch of functions by expressjs..
// so request handler hooking in multiple function..
// this request will go till u send response..




const http =require('http');
   
const express = require('express');               // import express to use it..

const app = express();                             // to store express in variable to running express as function.. or we can tell--> the express package seems to export a function in the end..   

app.use((req,res, next)=> {          // for every incoming reuest this function willl excute.                           // (.use)--> method defined by express framework..this "use" allow to add new middleware function..
console.log('in the middleware')
                                           //next is function this will passed to this function by expressjs....this "will allow the request to travel on to the next middleware"..
}); 
const server=http.createServer(app);                          
                                                                                                               
                                                         
server.listen(3000) ; 

//output: run--> "npm start"
        //run browser--> it will just keep loading or spinning- not get response--> because we got no logic where we send one....
        // in console ---> "in the middleware"    ===because allows to excute hook into funnel through request is sent...




 // if i duplicate and add another use statement..
 
 




const http =require('http');
   
const express = require('express');               // import express to use it..

const app = express();                             // to store express in variable to running express as function.. or we can tell--> the express package seems to export a function in the end..   

app.use((req,res, next)=> {          // for every incoming reuest this function willl excute.                           // (.use)--> method defined by express framework..this "use" allow to add new middleware function..
console.log('in the middleware')
                                           //next is function this will passed to this function by expressjs....this "will allow the request to travel on to the next middleware"..

next();                                      // if u didnt call "next"--> next just dies and if didnt call-->we should" send back a response" because otherwise the request cant continue its journey..

}); 

app.use((req,res, next)=> {          // for every incoming reuest this function willl excute.                           // (.use)--> method defined by express framework..this "use" allow to add new middleware function..
  console.log('in another  middleware')
                                             //next is function this will passed to this function by expressjs....this "will allow the request to travel on to the next middleware"..
  }); 


const server=http.createServer(app);                          
                                                                                                               
                                                         
server.listen(3000) ; 
                                                //"next()"-->this allows the request to continue to the next middleware in..

//output:  in the middleware
     //    in another  middleware





// how middleware works...  



const http =require('http');
   
const express = require('express');               // import express to use it..

const app = express();                             // to store express in variable to running express as function.. or we can tell--> the express package seems to export a function in the end..   

app.use((req,res, next)=> {          // for every incoming reuest this function willl excute.                           // (.use)--> method defined by express framework..this "use" allow to add new middleware function..
console.log('in the middleware')
                                           //next is function this will passed to this function by expressjs....this "will allow the request to travel on to the next middleware"..

next();                                      // if u didnt call "next"--> next just dies and if didnt call-->we should" send back a response" because otherwise the request cant continue its journey..

}); 

app.use((req,res, next)=> {          // for every incoming reuest this function willl excute.                           // (.use)--> method defined by express framework..this "use" allow to add new middleware function..
  console.log('in another  middleware')
                                             //next is function this will passed to this function by expressjs....this "will allow the request to travel on to the next middleware"..
                                            // we should send response ...response object sending response...or u can setting header...
  res.send('<h1>Hello from Express!</h1>');                                          // new utility function  we can send...(.send)--> allows to send response...can attach a body any type..here i use html
  
  });                                                    // see the browser inspect the content type automatically set to : text/html---> this feauture provided by expressjs
                                                          //default response header is : text/html.....
                                                         // here request is not died because we are sending response with "send"
const server=http.createServer(app);                          
                                                                                                               
                                                         
server.listen(3000) ; 
 

//output: when u run browser u will get---> "Hello from Express!"
   //terminal: in the middleware
             // in another  middleware



// Express.js-looking behind the scenes....



//in github-->expressjs-->select (lib)--->select (responsejs)--- analyse code--->then come back-->select (applicationjs)--> analyse code search for listen and review..



// u can eliminte "http" module and "createserver" and that line like below..




   
const express = require('express');               // import express to use it..

const app = express();                             // to store express in variable to running express as function.. or we can tell--> the express package seems to export a function in the end..   

app.use((req,res, next)=> {          // for every incoming reuest this function willl excute.                           // (.use)--> method defined by express framework..this "use" allow to add new middleware function..
console.log('in the middleware')
                                           //next is function this will passed to this function by expressjs....this "will allow the request to travel on to the next middleware"..

next();                                      // if u didnt call "next"--> next just dies and if didnt call-->we should" send back a response" because otherwise the request cant continue its journey..

}); 

app.use((req,res, next)=> {          // for every incoming reuest this function willl excute.                           // (.use)--> method defined by express framework..this "use" allow to add new middleware function..
  console.log('in another  middleware')
                                             //next is function this will passed to this function by expressjs....this "will allow the request to travel on to the next middleware"..
                                            // we should send response ...response object sending response...or u can setting header...
  res.send('<h1>Hello from Express!</h1>');                                          // new utility function  we can send...(.send)--> allows to send response...can attach a body any type..here i use html
  
  });                                                    // see the browser inspect the content type automatically set to : text/html---> this feauture provided by expressjs
                                                          //default response header is : text/html.....
                                                         // here request is not died because we are sending response with "send"
app.listen(3000);


//output: in browser runs "hello expressjs"---> by express framework..
    //terminal: in the middleware
             // in another  middleware
