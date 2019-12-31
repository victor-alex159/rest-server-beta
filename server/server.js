require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parser application/x-22-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json("get usuario");
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        })
    } else {
        res.json({
            persona: body
        })
    }
});

app.put('/usuario/:id', function(req, res) { // :id es el parametro que recibo
    let id_usuario = req.params.id;
    res.json({
        id: id_usuario
    });
});

app.delete('/usuario', function(req, res) {
    res.json("delete usuario");
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando al puerto', process.env.PORT);
});