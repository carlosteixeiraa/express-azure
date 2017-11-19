var express = require('express');
var router = express.Router();
var titulo = 'Express Azure'

/* GET Home */
router.get('/', function(req, res, next) {
  res.render('index', { title: titulo });
});

/* GET Exemplo */
router.get('/exemplo', function(req, res, next) {
  res.render('exemplo', { title: titulo });
});

module.exports = router;
