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
var ordersModel=mongoose.model('orders');

/* GET home page. */
/*
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

*/
router.get('/myorders',function(req,resp){
	var ordersModel = mongoose.model('orders');
	console.log("orders");
});

router.post("/sendOrder",function(req,res,next){


  res.redirect('/');
});

module.exports = router;
