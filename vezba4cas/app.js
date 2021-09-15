const express = require('express');
const app = express();

app.use(express.json());

let drzavi = [
    {
        id: '3',
        ime: 'France',
        jazik: 'French'

    }
];


app
    .post('drzavi', (req, res) => {
        drzavi.push(req.body);
        res.send(drzavi);
    })
app
    .get('drzavi', (req, res) => {
        const filteredDrzavi = drzavi.filter(drzava => drzava.id != req.params.id);
        drzavi = filteredDrzavi;
        res.send(drzavi);
    })


app
    .put('/drzavi/:id', (req, res) => {
        for (let i = 0; i < drzavi.length; i++) {
            if (drzavi[i].id == req.params.id) {
                drzavi[i] = req.body;
            }
        }
    });

app
    .patch('/drzavi/:id', (req, res) => {
        drzavi.forEach(drzava => {
            if (drzava.id == req.params.id) {
                if (req.body.ime) {
                    drzava.ime = req.body.ime;
                }
                if (req.body.jazik) {
                    drzava.jazik = req.body.jazik;
                }
            }
        });
        res.send(drzavi);
    });

app
    .delete('/drzavi/:id', (req, res) => {
        for (let i = 0; i < drzavi.length; i++) {
            if (drzavi[i].id == req.params.id){
                drzavi.splice(i, 1);
            }
        };
        res.send(drzavi);

    });
app.listen('3003', () => {
    console.log('App started on port 3003...');
});
