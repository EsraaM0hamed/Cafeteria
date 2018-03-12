var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.send('users/add');
});
router.post('/add',uploadMid.single('avatar'),function(req,resp){

   var UserModel=mongoose.model('users');
   var post=new UserModel({
     name:req.body.name,
     _id:req.body._id,      
   });
   post.save(function(err,doc){
   
       resp.send('done');
    //resp.json(doc ); 

   })
});


module.exports = router;
