var express = require('express');
var router = express.Router();

/* GET home cliente. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
   res.send('Teste');
});

module.exports = router;
