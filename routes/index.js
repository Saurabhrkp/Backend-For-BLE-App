const express = require('express');
const router = express.Router();

// Require our controllers.
const data_controller = require('../controller/dataController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', data_controller.post);

router.post('/demo', data_controller.demo);

module.exports = router;
