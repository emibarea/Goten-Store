const express = require('express');
const router = express.Router();

const PaymentController = require('../PaymentsController')
const PaymentService = require('../PaymentService')
const PaymentInstance = new PaymentController(new PaymentService())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
PaymentInstance.createPayment(req, res);
});

module.exports = router;
