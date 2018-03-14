var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var bodyParserMid=bodyParser.urlencoded();
var fs=require('fs');
var multer=require('multer');
var mongoose=require('mongoose');
var uploadMid=multer({
    dest:"./public/img" 
  });
  var userModel=mongoose.model('users');
router.get('/add',function(req,resp){
	
	console.log("hopa ");
   resp.render("add");
	
});
router.post('/add',uploadMid.single('img'),function(req,resp){
    //photo rania
    fs.renameSync(req.file.path,req.file.destination+"/"+req.file.originalname);
//
     console.log("Add");
     console.log(req.body);
   var user=new userModel({

        name:req.body.name,
        email:req.body.email,
        ext:req.body.ext,
        roomno:req.body.roomno,
        img:req.file.originalname,




        
    });
    user.save(function(err,doc){
        console.log(doc);
        if(!err){
            resp.redirect("/users/list");
        }else{
            resp.json(err);
        }
    });
    
});




/*
router.get('/list',function(req,resp){
	
	console.log("hopa ");
   resp.render("list");
	
});
*/
router.get('/list',function(req,resp){
    var usersModel=mongoose.model('users'); 
    usersModel.find({},function(err,result){
        if(!err){
            resp.render('list',{data:result});
    
        }else{
            resp.json(err);
        }
    
    })
      
});






//to list my users to make sure they have been added
router.get('/list/:page?',function(req,resp){
    var page=1;
    if(req.params.page)
    page=req.params.page
    /*
    mongoose.model('users').paginate({},{page:page,limit:5},function(err,result)
    {
        if(!err){
         resp.render('users/list',{data:result,msg:req.flash('msg')});
        //resp.json(result.docs);
        }
        else{
           resp.render(err);
        }

    });*/
    
});





/*
//GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/




module.exports = router;
