const express = require('express');
const router = express.Router();
const controller = require('../controllers/payments');
const jwt = require('express-jwt');

require('dotenv').config();

router.use(jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256']}));
router.post('/create', controller.create)
      .post('/authorize', controller.authorize)
      .post('/:id/void', controller.void)
      .post('/:id/capture', controller.create)
      .post('/:id/refund', controller.refund)

module.exports = router;
