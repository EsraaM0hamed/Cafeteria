var express = require('express');
var fs=require('fs');
var router=express.Router();
var bodyParser=require('body-parser');
var bodyParserMid=bodyParser.urlencoded();
var multer=require('multer');
var mongoose=require('mongoose');

var OrdersModel=mongoose.model('orders');
/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/myorders', function(req, res, next) {
  res.render('orders/myorders');
});
//delete
/*router.get('/delete/:id',function(req,resp){
 	OrdersModel.remove({_id:req.params.id},function(err,result){
  if (!err) {
    req.flash("msg","Done");
    resp.redirect("/orders/myorders");

  }
})
})*/
module.exports = router;
