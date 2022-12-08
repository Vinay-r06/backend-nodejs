// using Express Router


// const express = require('express');
// const bodyParser = require('body-parser');               

// const app = express(); 

// const  adminRoutes=require('./routes/admin')                   // using a relative path to the routes folder...

// const shopRoutes=require('./routes/shop')           // import of shop js for front face router access


// app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   

// app.use(adminRoutes);                 // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
// app.use(shopRoutes)                            //registering 2nd 
                                                                                                           
// app.listen(3000);    


// spilt routing code
//export our logic in different files and import it into this file
//routes of -add-product and product will move to admin .js and normal route user visting front facing will see that will go shop.js....


//output: "npm start"   
       // load --> http://localhost:3000/add-product----> form will come to submit..and end with-->http://localhost:3000/add-product





  // come to backNodeBasis.js--> switch the register 2nd to 1st and 1st to second --->   app.use(shopRoutes)
     //                                                                                  app.use(adminRoutes); 


// const express = require('express');
// const bodyParser = require('body-parser');               

// const app = express(); 

// const  adminRoutes=require('./routes/admin')                   // using a relative path to the routes folder...

// const shopRoutes=require('./routes/shop')           // import of shop js for front face router access


// app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   

// app.use(shopRoutes);                        //   adminRoutes --> shopRoutes                                           // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
// app.use(adminRoutes)                       //    shopRoutes--->  adminRoutes                                         //registering 2nd 
                                                                                                           
// app.listen(3000);    




// output:  after switch of order of excuetion
//          run--> in browser --> http://localhost:3000/add-product----> form will come to submit..and end with -->http://localhost:3000/add-product....                       // we did not end up in "shop.js" route--->(because form will come..form in admin.js) because i had "Get"--> in shop.js..because "Get" and "Post" both are do actually exact match->('/')...if we run "app.get" or "app.post" both will get form in browser and end up with-->http://localhost:3000/add-product.  
                 //                                                                                                                                                              if we did--> "router.use()" in (shop.js)--> and run in browser reload--> will get---> "hello from express"....and end with-->http://localhost:3000/add-product..

               // after this do below 
                 // and run random request--->like-->http://localhost:3000/hhghddj....--> u will get error--> "Cannot GET /hhghddj"...because i dont have single middleware to handle...




                 


//  adding a 404 error page...                



const express = require('express');
const bodyParser = require('body-parser');               

const app = express(); 

const  adminRoutes=require('./routes/admin')                   // using a relative path to the routes folder...

const shopRoutes=require('./routes/shop')                      // import of shop js for front face router access


app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   
 
app.use(adminRoutes);                                                                                // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
app.use(shopRoutes)                                                                              //registering 2nd 
                 
app.use((req,res,next)=>{                              // this will handle error middleware                // by default it will be '/'--> no need to put...
  res.status(404).send('<h1>Page not found</h1>');                                  // .status(404)-->method given by express 
});



app.listen(3000);    
                                             .use()--> will handle all types of http methods..


// output: in browser run--> http://localhost:3000/hhghddj--> u will get--> Page not found.. and end up with -->http://localhost:3000/hhghddj  
//               then  run-->  http://localhost:3000/add-product----> form will come..and endup with-->http://localhost:3000/add-product...       







//filtering paths...



const express = require('express');
const bodyParser = require('body-parser');               

const app = express(); 

const  adminRoutes=require('./routes/admin')                   // using a relative path to the routes folder...

const shopRoutes=require('./routes/shop')                      // import of shop js for front face router access


app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   
 
app.use('/admin', adminRoutes);                                               // we add common path for each router in admin.js-->'/admin/add-product' and in form action also change-->/product to /add-project--> or change in app.js itself 1 time --> ('/admin', adminRoutes)...like this line..                                                       // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
app.use( shopRoutes)                                                                              //registering 2nd 
                 
app.use((req,res,next)=>{                                                      // this will handle error middleware                // by default it will be '/'--> no need to put...
  res.status(404).send('<h1>Page not found</h1>');                                  // .status(404)-->method given by express 
});



app.listen(3000);                                   
                                            // so segment as filter, now router starts with /admin will go into the adminRoutes file..
                                                    

// output: run browser--> http://localhost:3000/add-product----> will get-->"Page not found"---> because not exiting...
 // now run browser--->http://localhost:3000/admin/add-product---> will get form to type and submit-->"book", 3- and submit--> u will get-->"Page not found"...and end up with-->http://localhost:3000/product..--because in admin.js --form action is "/product"..soo change to /admin/product---> because i want redirect to /product next route.. to get--> "hello from express".....
 //                                                                after changing in form action--> run and form will come and type and submit.--> u will get-->"Hello from Express!"..--> u will endup with-->http://localhost:3000/...

 // in terminal u will get: { title: 'book', size: '2' }...

// this filtering allow us to put common starting segment for our path...






// assignment--> make a /shop route for all the routes that call the shop.js file...





const express = require('express');
const bodyParser = require('body-parser');               

const app = express(); 

const  adminRoutes=require('./routes/admin')                   // using a relative path to the routes folder...

const shopRoutes=require('./routes/shop')                      // import of shop js for front face router access


app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   
 
app.use('/admin', adminRoutes);                                               // we add common path for each router in admin.js-->'/admin/add-product' and in form action also change-->/product to /add-project--> or change in app.js itself 1 time --> ('/admin', adminRoutes)...like this line..                                                       // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
app.use(shopRoutes)                                                                              //registering 2nd 
                 
app.use((req,res,next)=>{                                                      // this will handle error middleware                // by default it will be '/'--> no need to put...
  res.status(404).send('<h1>Page not found</h1>');                                  // .status(404)-->method given by express 
});



app.listen(3000); 



//output: changed to "/shop"-->in "admin.js"--> in 2nd route because it calls shop.js....and shop.js -->changed to "/shop" in the route ..
//         in browser run-->http://localhost:3000/admin/add-product-->type and submit -->u will get--> Hello from shop!--> and endup with -->http://localhost:3000/shop..
//          in terminal-->{ title: 'book', size: '3' }..
