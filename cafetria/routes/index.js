var express = require('express');
var router = express.Router();

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
  res.redirect('/');
});

module.exports = router;
