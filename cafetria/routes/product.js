var express=require('express');
var model=require('./models');
var router =express.Router();
var bodyParser=require('body-parser');
var bodyParserMid=bodyParser.urlencoded();

router.get('/add_product',function(req,resp){
resp.render('product/add_product');


});

router.get('/products',function(req,resp){
    resp.render('product/products');


});

router.post('/add_product',bodyParserMid,function(req,resp){
    var Bee = new Models.Product({ //You're entering a new bug here, giving it a name, and specifying it's type.
       p_name: "Scruffy",
    bugColour: "Orange",
        Genus: "Bombus"
     });


});

router.post('/products',bodyParserMid,function(req,resp){
    

});
module.exports = router;