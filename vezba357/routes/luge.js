var express = require('express');
const router = express.Router();

const luge = [];

router
    .get('/', (req, res,) => {
        res.render('index', { title: 'Express', name: 'Paskalija', luge: luge });
    })
    .post('/', (req, res) => {
        luge.push(req.body);
        res.redirect('/luge');
    })

module.exports = router;
