var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/myorders', function(req, res, next) {
  res.render('orders/myorders');
});
module.exports = router;
