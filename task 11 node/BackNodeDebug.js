const http =require('http');
const routes=require('./backroutes');                                                       
    console.log(routes.sometime);                                                                                  
const server=http.createServer(routes.handler);                        // access the handler property...    
                                                                                                               
                                                         
server.listen(3000) ; 



//logical errors--->it is not cause an error message..but u will not get wat expected when coded..(the output is not coming as u expected or getting different output)...
 // debug: first run the pgm---> run debug---> select nodejs or "attach by Process Id"---> select u r file code written---->(debug attached--> show in terminal  and top box will come)-->mark the breakdown points-->and run browser for excution-->in vs code debug is showing one by one...where u want variable value--mark that line debug and go to debug cosole and enter that variable...it will show is there in that variable.....



 //debug auto reload


 //restarting the debugger automatically after editing our backNodeBasis.js..

//2 things --- one is break point of debug..
//             second  is u can console in debug console..which u used in code..
  //           u can try and error different code in the debug console...it will not affect that real code..u can check here and try before adding that into real code.. 

// // it will give error while debugging in terminal because it will not use local nodemon..it looks for globally..so run --- "npm install nodemon -g " 

//after install to globally..now click run deubg and u can it..this will  run in  terminal..
// add breakpoint..and run browser and subit name... now u see the output in terminal..
//but also u can debug console to check variable value..in terminal u will get normal output..
// u have to use "terminal"---> because if u change anything and save the code... both debugger and node restarts---this are "2 separate processes"..
//if u want stop the debugger..nodemon has quit separtely or exit separtly---u can do by--"control c"--->this will not be done in "debug console"--this y funnel this in terminal..
//u stop processes separetly..u can do it from terminal..if u r using "nodemon process"--should use "integratedTerminal"...

