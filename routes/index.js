var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var payload = {};
  payload.self = [];
  payload.external = [];
  var customer = {};
  customer.name = 'Joao Sousa';
  customer.id = '231233';
  customer.email = 'joasousa@deloitte.pt';
  payload.self.push(customer);
  customer = {};
  customer.name = 'Francisco Couto';
  customer.id = '424242343';
  customer.email = 'fcouto@deloitte.pt';
  payload.self.push(customer);
  res.send(JSON.stringify(payload));
});

module.exports = router;
