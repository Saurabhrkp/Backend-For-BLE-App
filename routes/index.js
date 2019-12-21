var express = require('express');
var router = express.Router();

// Require our controllers.
var data_controller = require('../controller/dataController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', data_controller.Data_get);

router.post('/data', data_controller.Data_post);

module.exports = router;
