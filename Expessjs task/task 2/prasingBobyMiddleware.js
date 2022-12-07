// handling different routes..



// should only trigger for requests that go--> "/"

// const express = require('express');                      
// const app = express(); 

// app.use('/', (req,res, next)=> {                                       // five arguments ways to use this -->.use method....(path,callback)....path --> used to filrter out certain request 
//    console.log('in another  middleware!');
                                                                                    
//      res.send('<h1>Hello from Express!</h1>');                                          
    
//      });                                                   
                                                             
                                                            
//    app.listen(3000);

   // output: Hello from Express!
  // in terminal: in another  middleware!
             //   in another  middleware!



   // if u run the browser--> http://localhost:3000/add-product


   // output: Hello from Express!              --> same output
   
   // in terminal: in another  middleware!
             //    in another  middleware!




//specific telling "/add-product" to match url..




// const express = require('express');                      
// const app = express(); 

// app.use('/add-product', (req,res, next)=> {                                    // adding another duplicate middleware          
//   console.log('in another  middleware!');
                                                                                   
//     res.send('<h1>The "Add Product" Page</h1>');                                          
   
//     });                                                   
         
// app.use('/', (req,res, next)=> {                                       
//    console.log('in another  middleware!');
                                                                                    
//      res.send('<h1>Hello from Express!</h1>');                                          
    
//      });                                                   
                                                             
                                                            
//    app.listen(3000);                                         
//                                                        // this is the code that allows us to route our requests into different middleware...


   //  output: when run url--> http://localhost:3000     or  http://localhost:3000/ ---> Hello from Express!

  //                        --> http://localhost:3000/add-product   ---> The "Add Product" Page

 // in terminal: in another  middleware!
          //     in another  middleware!                                                           



 

 // and we have middleware that should be applied to all "request"--> we simply add on to top of all other middleware..
 
 


//  const express = require('express');                      
// const app = express(); 


// app.use('/', (req,res,next)=>{                                     // u can add specific filter to match or without filter -->"/"
// console.log('This always runs!');                                // this middleware appiled all the request
// next();                                                         // contiuesd to after this..
// })


// app.use('/add-product', (req,res, next)=> {                                    // adding another duplicate middleware          
//   console.log('in another  middleware!');
                                                                                   
//     res.send('<h1>The "Add Product" Page</h1>');                                          
   
//     });                                                   
         
// app.use('/', (req,res, next)=> {                                       
//    console.log('in another  middleware!');
                                                                                    
//      res.send('<h1>Hello from Express!</h1>');                                          
    
//      });                                                   
                                                             
                                                            
//    app.listen(3000);        


//output: when run url--> http://localhost:3000     or  http://localhost:3000/ ---> Hello from Express!

  //                        --> http://localhost:3000/add-product   ---> The "Add Product" Page


// in terminal: This always runs!
//              in another  middleware!





// parsing incoming requests..           --> work with incoming requests and extract data...

// for this i want handle post request


// const express = require('express');                      
// const app = express(); 


// app.use('/add-product', (req,res, next)=> {                                             
                                                                                   
//     res.send('<form action ="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');              // here i want return html page with a form                            
   
//     });                                                                           // this will send html back which holds form---> so we need a "route" or "middleware" that handles requests to product
         
// app.use('/product', (req, res, next)=>{
//   console.log(req.body);                                      //geeting the body of incoming request...extract the wat the user has sent me
//   res.redirect('/');                                                    // redirect method provided by express--> instead of manually setting the status codeand location header

// })

// app.use('/', (req,res, next)=> {                                       
                                                                                    
//      res.send('<h1>Hello from Express!</h1>');                                          
    
//      });                                                   
                                                             
                                                            
//    app.listen(3000);        



//output: run --> http://localhost:3000/add-product   --> form will come and give input --> type "book" and submit
// redirected to -->http://localhost:3000/----> Hello from Express! ---> we redirected "/"

// in terminal --> "undefined"-----> for console.log(req.body)..--- reuest gives this body property by default..but request "does not try to parse the incoming request body" 
                // to do that we need to register a parser and.... we do that adding "another middleware"
     
               
 //  to add another middleware we need do that before u r route handling middleware .. because prasing of the body should be done...no matter where u r request ends..u want prase the incoming request body first...for that install 3rd party package..run--> "npm install --save body-parser".. 




// parse the incoming requests.. the body before  route handling middleware...


const express = require('express');
const bodyParser = require('body-parser');               // package of body praser

const app = express(); 

app.use(bodyParser.urlencoded({extended:false}));                               // use that object bodyparser and .urlencoded()... this .urlencoded() is a function to execute...this register middleware---> "bodyParser.urlencoded()"-->is middleware......urlencoded yelids a middleware function-->(req,res, next)=>{ console.log(req.body); res.redirect('/');}--> we cant see that...
                                                       // this not parese all kinds possible bodies, files,json...but will parse bodies like the we getting..sent through a form



app.use('/add-product', (req,res, next)=> {                                             
                                                                                   
    res.send('<form action ="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');              // here i want return html page with a form                            
   
    });                                                                           // this will send html back which holds form---> so we need a "route" or "middleware" that handles requests to product
         
app.use('/product', (req, res, next)=>{
  console.log(req.body);                                      //getting the body of incoming request...extract the wat the user has sent me
  res.redirect('/');                                                    // redirect method provided by express--> instead of manually setting the status codeand location header

})

app.use('/', (req,res, next)=> {                                       
                                                                                    
     res.send('<h1>Hello from Express!</h1>');                                          
    
     });                                                   
                                                             
                                                            
   app.listen(3000);    



  // output: run interminal:  "npm install --save body-parser"  ----->3rd party package for prasing incoming request body....this matter use "production" so -->--save..
  //  now u can use this method "prase body"
  // while error came:-->body-parser deprecated undefined extended: provide extended option..
  // give like config option for urlencoded--> app.use(bodyParser.urlencoded({extended:false}));------> this should able to parse non-default features... 
  
  // run --> http://localhost:3000/add-product   --> form will come and give input --> type "book" and submit..
  // redirected to -->http://localhost:3000/----> Hello from Express! ---> we redirected "/"

 // in terminal:   { title: 'book' }         // javascript object--> key and value pair format....key we defined in html (input:-->name: "title") and the value user entered.....now we can work with that data user entered... store it in database or showing in response...

      //now able to parse incoming request bodies with the help of the body parser package....









 // limiting middleware execution to POST requests...



//  const express = require('express');
// const bodyParser = require('body-parser');               // package of body praser

// const app = express(); 

// app.use(bodyParser.urlencoded({extended:false}));                               // use that object bodyparser and .urlencoded()... this .urlencoded() is a function to execute...this register middleware---> "bodyParser.urlencoded()"-->is middleware......urlencoded yelids a middleware function-->(req,res, next)=>{ console.log(req.body); res.redirect('/');}--> we cant see that...
//                                                                                 // this not parese all kinds possible bodies, files,json...but will parse bodies like the we getting..sent through a form



// app.use('/add-product', (req,res, next)=> {                                             
                                                                                   
//     res.send('<form action ="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');                            // here i want return html page with a form                            
   
//     });                                                                                                                                                             // this will send html back which holds form---> so we need a "route" or "middleware" that handles requests to product
         

// // app.use('/product', (req, res, next)=>{                        // but this miiddleware alwaays excuted  not just "Post requests" but also for "GET requests".
// //   console.log(req.body);                                                                                                                                           //geeting the body of incoming request...extract the wat the user has sent me
// //   res.redirect('/');                                                                                                                                               // redirect method provided by express--> instead of manually setting the status codeand location header

// // })


// //soo instead of -->app.use() above middleware we use --->app.get() 


// app.get('/product', (req, res, next)=>{                                 // this -->"app.use()"-->it only will fire for incoming get requests--another form of filtering besides filtering for path.....this-->app.get--> allows us to filter for "get requests"..
// console.log(req.body);                                                  // u can use another form filtering..-->"app.post()"-->to filter for "incoming post request"
// res.redirect('/');   
// })


// // or we can use "app.post()" instead of "app.get" like below...

// // app.post('/product', (req, res, next)=>{                                 //"app.post()"-->to filter for "incoming post request"....soo this middleware will now only trigger for "incoming post requests" with that "path" which u gave inside, here-->'/product'
// //   console.log(req.body);
// //   res.redirect('/');
// // })
//                                                                           // can use--different http methods like--> .delete, .put, .patch...

// app.use('/', (req,res, next)=> {                                       
                                                                                    
//      res.send('<h1>Hello from Express!</h1>');                                             
    
//      });                                                   
                                                                                                                     
// app.listen(3000);    

// for using "app.post()" output below:

//output: run in browser: http://localhost:3000/product----> u will get --> Hello from Express!--->so here didnt end up even i entered /product but it was "get request"....but if u send post request through that form--> u will see the output in terminal-->{title:'book 2'}
//      then run --> http://localhost:3000/add-product  --> u will get---->form to input and submit -->type "book 2"---> u will get --> Hello from Express!...in terminal u wil get--> { title: 'book 2' }..
                                                         

// for using "app.get()" output below and uncommented or removed app.post():


//output: run in browser: http://localhost:3000/product----> u will get --> Hello from Express!
//        then run --> http://localhost:3000/add-product  --> u will get---->form to input and submit -->type "book 2" ---> u will get --> Hello from Express!---> in terminal" not get output u entered" because u r using "app.get()"-->the browser stand end with this link-->  http://localhost:3000/product---> it will stops in  second "app.get()" middleware itself..








//assignment adding another tag in input like size and prase both input..


const express = require('express');
const bodyParser = require('body-parser');               

const app = express(); 

app.use(bodyParser.urlencoded({extended:false}));                              
                                                                              



app.use('/add-product', (req,res, next)=> {                                             
                                                                                   
    res.send('<form action ="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');                            // here i want return html page with a form                            
   
    });                                                                                                                                                             // this will send html back which holds form---> so we need a "route" or "middleware" that handles requests to product
         

 app.use('/product', (req, res, next)=>{                       
   console.log(req.body);                                                                                                                                           //geeting the body of incoming request...extract the wat the user has sent me
   res.redirect('/');                                                                                                                                               // redirect method provided by express--> instead of manually setting the status codeand location header

 })


 //soo instead of -->app.use() above middleware we use --->app.get() 


// app.get('/product', (req, res, next)=>{                                 
// console.log(req.body);                                                  
// res.redirect('/');   
// })


// // or we can use "app.post()" instead of "app.get" like below...

// // app.post('/product', (req, res, next)=>{                                 
// //   console.log(req.body);
// //   res.redirect('/');
// // })
//                                                                           

app.use('/', (req,res, next)=> {                                       
                                                                                    
     res.send('<h1>Hello from Express!</h1>');                                             
    
     });                                                   
                                                                                                                     
app.listen(3000);    


// output: run --> http://localhost:3000/add-product  --> u will get---->form to input and submit -->type "book" and size: 3 ---> u will get --> Hello from Express!..
//     in terminal u wil get--> { title: 'book', size: '3' }..
