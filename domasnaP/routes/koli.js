var express = require('express');
var router = express.Router();

const koli = [];


router
  .get('/', (req, res,) => {
    res.render('index', { title: 'Express' , koli:koli });
  })
  .post('/koli', (req, res,) => {
    koli.push(req.body);
    console.log(koli);
    res.redirect('/');
  });
module.exports = router;
