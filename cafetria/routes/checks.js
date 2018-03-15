var express=require('express');
var fs=require('fs');
var router =express.Router();
var bodyParser=require('body-parser');
var bodyParserMid=bodyParser.urlencoded();
var multer=require('multer');

var mongoose=require('mongoose');
var uploadMid=multer({
    dest:"./public/imgs"
});

var usersModel=mongoose.model('users');
var orderModel=mongoose.model('orders');



router.get('/checks',function(req,resp){
usersModel.find({},function(err,result){
console.log(result);
resp.render('/checks',{data:result,msg:req.flash('msg')});//render
 });//find
   });//get



router.post('/checks',bodyParserMid ,function(req,resp){

    var x=req.body.x;
    var y=req.body.y;
ordersModel.find({order_date,order_amount,order_date:{$gte:x,$lt:y} },function(err,result){       
resp.json({result});

  });

});


