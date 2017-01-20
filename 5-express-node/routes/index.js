var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/user',function(req,res,next){

	res.send('hi  this is test user');

});

router.get('/detail',function(req,res,next){

	res.send('hi  this is test user');

});

router.get('/nandan',function(req,res,next){

	res.send('hi this nandan test email');
});

router.get('/fadu',function(req,res,next){
	res.send('i this will fadu');
})
module.exports = router;
