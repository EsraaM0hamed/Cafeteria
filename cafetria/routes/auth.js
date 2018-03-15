var express=require('express');
var router=express.Router();
var bodyParser = require('body-parser');
var bodyParserMid=bodyParser.urlencoded();
router.get('/login',function(req,resp){
    resp.render("auth/login",{
        message:req.flash("msg")
    });
});
router.post('/login',bodyParserMid,function(req,resp){
    var email=req.body.email;
    var password=req.body.password;
    if(email=="n@n.com"&&password.valueOf()=="123"){
        req.session.email="n@n.com";
        req.session.password="123";
        resp.redirect("/users/list");
    }else{
        req.flash("msg","invalid email & password");
        resp.redirect("../users/add");
    }
});

module.exports=router;