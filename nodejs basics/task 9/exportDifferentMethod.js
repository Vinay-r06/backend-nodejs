//using the node modules system..  (by function is exported)



creating new file for routes..

const http =require('http');
const routes=require('./backroutes');                                                       //import the routes.......since it is now not global module we just add local path (./)..can ignore (.js)-->because nodejs will add .js automatically at the end
                                                                                            // after this it will look for "backroutes" file in the same floder "backnodebasis" will find and in that file look for module exports to see whats registered there...and can export "requestHandler" method..
const server=http.createServer(routes);                // no--> routes() dont excuted it  so no paranthisis...only name-->(routes)..--> telling nodejs please execute the "function that stored in routes for incoming requests".....

                                                       // file content cached by node and we cant edit externally....if routes an object and add a  new property---->routes.  --->  cant manipulate the original file...basical locked and not accessible from outside...we can only "export "stuff that we can read from outside                                                       
                                                         
server.listen(3000) ; 


// output: hello+rahul  --> in message.txt vs code these will be print when we subit input throgh browser..






// 2nd way is export through object by access the handler property...



const http =require('http');
const routes=require('./backroutes');                                                       
    console.log(routes.sometime);                                                                                  
const server=http.createServer(routes.handler);                        // access the handler property...    
                                                                                                               
                                                         
server.listen(3000) ; 


// output: Some hard coded text----> in vs code terminal..
//         hello+hii  --> when we submit in browser saved in file..in vs code file wat is there that will print...




 //3rd way of export by assign different property...

 const http =require('http');
 const routes=require('./backroutes'); 

     console.log(routes.someText);                                                                                  
 const server=http.createServer(routes.handler);                        // access the handler property...    
                                                                                                                
                                                          
 server.listen(3000) ; 
 


//output: Some hard coded..... text----> in vs code terminal..
//        hello+rahul  --> when we submit in browser saved in file..in vs code file wat is there that will print...
 






//shortcut for 3rd way for export...


const http =require('http');
 const routes=require('./backroutes'); 

     console.log(routes.someText);                                                                                  
 const server=http.createServer(routes.handler);                        // access the handler property...    
                                                                                                                
                                                          
 server.listen(3000) ; 



 //output: Some hard coded..... text----> in vs code terminal..
//        hello+hii+tt  --> when we submit in browser saved in file..in vs code file wat is there that will print...
