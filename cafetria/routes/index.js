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
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
   var products = [
    {id:1,name:"coca",img:"coca1.jpg",price:50},
    {id:2,name:"pepesi",img:"pepsi.jpeg",price:10},
    {id:3,name:"pepesi",img:"pepsi.jpeg",price:10},
    {id:4,name:"coca",img:"coca1.jpg",price:50},
    {id:5,name:"pepesi",img:"pepsi.jpeg",price:10},
    {id:6,name:"coca",img:"coca1.jpg",price:50},
    {id:7,name:"pepesi",img:"pepsi.jpeg",price:10},
    {id:8,name:"coca",img:"coca1.jpg",price:50},
    {id:9,name:"pepesi",img:"pepsi.jpeg",price:10},
    {id:10,name:"coca",img:"coca1.jpg",price:50},
    {id:11,name:"pepesi",img:"pepsi.jpeg",price:10},
    {id:12,name:"coca",img:"coca1.jpg",price:50},
    {id:13,name:"pepesi",img:"pepsi.jpeg",price:10},
  ];
  var rooms=[1,2,3,4,5,6];
  contex = {
    products:products,
    rooms:rooms,
    admin:true,
    user:{name:"abdelmun3m"}
  }
  //res.render('makeOrder',{products:products,rooms:rooms});
  res.render('index',contex);

});

router.post("/sendOrder",function(req,res,next){
  var order=new ordersModel({
        order_status:"done",
        order_amount:"1",
        order_action:"processing",
        user_name:"name",
        order_room:req.room,
        order_ext:"1",

        /*
          order_status:String,
          order_amount:String,
          order_action:String,
          user_name:String,
          order_room:Number,
          order_ext:Number
        */
    });
    if(order){
      console.log("order added");
    }else{
      console.log("order not added");
    }
    
  res.redirect('/');
});

module.exports = router;
