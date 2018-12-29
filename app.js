const math = require('./services/math');

const request = require('request');

const express = require('express');

const app = express();

const port = 8080;

app.get('/math/add', (req, res) => {
    console.log('You called ', req.query);
    res.send(`You called add`);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});