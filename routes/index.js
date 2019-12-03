var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { signTypes: ['Express','sign','another sign'] });
});

router.get('/reports/:search', function(req, res, next) {
  // var search = req.params.tagId;
  // var signTypes = ['Express','sign','another sign'];
  //var signTypes = sql call;
  var query = 'SELECT * FROM signs WHERE LOWER(description) LIKE (\'%' + req.params.search.toLowerCase() + '%\')'
  // var returned_sql = db.query(query)
  // res.render('reports-search', { signs: returned_sql });
  res.send(query)
});
router.get('/reports', function(req, res, next) {
  res.render('reports', { signTypes: ['Express','sign','another sign'] });
});

router.get('/login',(req,res) =>{
  res.render('login.jade')
} )
router.get('/mainpage',(req,res) =>{
  res.render('mainpage.jade')

router.get('/remove', function(req, res, next) {
  res.render('remove', { signTypes: ['Express','sign','another sign'] });
});
} )
module.exports = router;
