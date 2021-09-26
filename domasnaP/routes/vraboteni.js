var express = require('express');
var router = express.Router();

const vraboteni = [];

router
  .get('/', (req, res,) => {
    res.render('index', { title: 'Express' , vraboteni:vraboteni });
  })
  .post('/vraboteni', (req, res,) => {
    vraboteni.push(req.body);
    console.log(vraboteni);
    res.redirect('/');
  });

module.exports = router;