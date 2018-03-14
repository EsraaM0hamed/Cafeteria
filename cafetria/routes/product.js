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
router.get('/add_product',function(req,resp){
resp.render('product/add_product');
});
var productModel=mongoose.model('products');
router.post('/add_product',uploadMid.single('product_img'),function(req,resp){
//fs.renameSync(req.file.path,req.file.destination+"/"+req.file.originalname);
   var product=new  productModel({
       p_name:req.body.product_name,
       p_price:req.body.product_price,
       p_category:req.body.product_category,
       p_img:req.file.filename,
   });
     product.save(function(err,doc){
    console.log(err , doc);
    resp.json(doc);
   });
})
router.get('/products',function(req,resp){
productModel.find({},function(err,result){
    if(!err){
        resp.render('product/products',{data:result});

    }else{
        resp.json(err);
    }
})  
});
router.post('/products',bodyParserMid,function(req,resp){
});
module.exports = router;