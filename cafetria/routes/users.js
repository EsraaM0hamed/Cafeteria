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
        passw:req.body.passw,
        ext:req.body.ext,
        roomno:req.body.roomno,
        img:req.file.originalname,
    });
    user.save(function(err,doc){
        console.log(doc);
        if(!err){
            resp.redirect("users/list");
        }else{
            resp.json(err);
        }
    });
});


//delete
router.get('/delete/:id',function(req,resp){
  userModel.remove({_id:req.params.id},function(err,result){
  if (!err) {
    req.flash("msg","Done");
    resp.redirect("/users/list");

  }
})
})
/////edit
router.get('/edit/:id',function(req,resp){
  userModel.findOne({_id:parseInt(req.params.id)},function(err,doc)
  {
  //  resp.josn(req.params.id)
resp.render('users/edit',{obj:doc});
})
})

router.post('/edit/:id',[bodyParserMid] ,function(req,resp){

  userModel.update({_id:parseInt(req.params.id)},
  {"$set": {title:req.body.name}
  },function(err,doc){
    if(!err)
resp.redirect('/users/list');
else
      resp.json(err);
})
});
router.get('/list',function(req,resp){
    var usersModel=mongoose.model('users'); 
    usersModel.find({},function(err,result){
        if(!err){
            resp.render('list',{data:result});
    
        }else{
            resp.json(err);
        }
    
    });
      
});
//to list my users to make sure they have been added
router.get('/list/:page?',function(req,resp){
    var page=1;
    if(req.params.page)
    page=req.params.page
    
    
});

router.get('/login',function(req,resp){
    resp.render('login');
    }) ;
  router.post('/login',bodyParserMid,function(req,resp){
    var email=req.body.email;
    var password=req.body.passw;
    if(email =="n@n.com" && passw=="123"){
      req.session.email="n@n.com";
      req.session.password="123";
  
      resp.redirect('/users/list/');
      console.log( req.session.username);
    }else{
      req.flash("msg",'invalide username');
      resp.redirect('/login');
    }
  
  });  
module.exports = router;