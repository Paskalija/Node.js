var express = require('express');
var router = express.Router();

const koli = [];


router
  .get('/', (req, res) => {
    res.render('koli', { koli:koli });
  })
  .post('/', (req, res) => {
    koli.push(req.body);
    console.log(koli);
    res.redirect('/koli');
  });
module.exports = router;
