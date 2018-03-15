var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('allusers');

});

router.post("/sendOrder",function(req,res,next){


  res.redirect('/');
});

module.exports = router;
