var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var bodyParserMid=bodyParser.urlencoded();
var fs=require('fs');
var multer=require('multer');
var mongoose=require('mongoose');


var user=mongoose.model('users');

router.get('/login',function(req,resp){
    resp.render("auth/login",{
        message:req.flash("msg")
    });
});
router.post('/login',bodyParserMid,function(req,resp){


    var email=req.body.email;
    var password=req.body.password;
    user.findOne({ email: email ,passw:password},function(err,result){
        if(err){
            resp.redirect('/auth/login');
        }
        if(email=="" || password==""){
            console.log("he");
            req.flash("msg",'invalide email');
            resp.redirect('/auth/login');

        }
        if(result != null){
            
             if(email == result.email && password == result.passw ){
              console.log("hi");
                req.session.email=email ;
                req.session.password = password;
                resp.redirect("../users/list");
                }
                else{
                    req.flash("msg",'invalide email');
                    resp.redirect('/auth/login');
                }
            }
            else{
                resp.redirect('/auth/login');
            }

        });
    });
module.exports=router;






