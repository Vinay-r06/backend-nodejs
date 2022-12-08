const express= require('express');

const router=express.Router();              //.Router()--> this is a function..


router.get('/shop', (req,res, next)=> {                                       
                                                                                    
    res.send('<h1>Hello from shop!</h1>');                                             
   
    });                                                   
         

module.exports=router;    