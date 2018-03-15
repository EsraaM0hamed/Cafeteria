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
         if(!err){
             console.log("error");
            //resp.render('product/products',{data:});
           // resp.end();
            resp.redirect('/products/products');

         }else{
            console.log("doc");

             resp.json(err);
         }

    console.log(err , doc);
    //resp.json(doc);
   });


})

router.get('/delete/:id',function(req,resp){
    mongoose.model('[products]').remove({_id:req.params.id},function(err,result){
        if(!err){
            req.flash("msg","Done")
            resp.redirect('/product/products');


        }
    })
})




router.get('/edit/:id',function(req,resp){
    mongoose.model('products').findOne({_id:req.params.id},function (err,result) {
        resp.render('product/edit',{obj:result});

    })
})
router.post('/edit/:id',[bodyParserMid],function(req,resp){
    console.log(req.params.id);
    mongoose.model('products').update({_id:parseInt(req.params.id)},{

    "$set":{title:req.body.title}
    },function(err,doc){

        resp.redirect('/products/products');
    });
})
router.get('/products',function(req,resp){


productModel.paginate({},{page:1,limit:40},function(err,result){

    if(!err){
        resp.render('product/products',{data:result.docs});

    }else{
        resp.json(err);
    }

})

});

router.post('/products',bodyParserMid,function(req,resp){


});
module.exports = router;
