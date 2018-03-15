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
router.get('/myorders',function(req,resp){
	var ordersModel = mongoose.model('orders');
	console.log("orders");
});

router.post("/sendOrder",function(req,res,next){


  res.redirect('/');
});

module.exports = router;
