const express= require('express');

const router=express.Router();              //.Router()--> this is a function..


// ../admin/add-product => GET request..
router.get('/add-product', (req,res, next)=> {                                             
                                                                                   
    res.send('<form action ="/admin/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');                                                 
   
    });                                                                                                                                                            



    //  ../admin/product => POST request..
router.post('/product', (req, res, next)=>{
  const object=JSON.parse(JSON.stringify(req.body))                     // { title: 'book', size: '3' }                       
  console.log(object);
  res.redirect('/shop');
})  

module.exports=router;           // this router object and this routes registered                          // router---.get and .post are 2 object --> this a object which we registered routes