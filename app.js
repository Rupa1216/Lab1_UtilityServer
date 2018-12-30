const math = require('./services/math');

const request = require('request');

const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    console.log('You called ', req.query);
    res.send(`Hello`);
});

app.get('/math/add', (req, res) => {
    console.log('You called ', req.query);
    res.send(`You called add`);
});

app.get('/math/multiply', (req, res) => {
    console.log('You called ', req.query);
    res.send(`You called multiply`);
});

// app.get('/image', (req, res) => {

//     request(`https://avatars0.githubusercontent.com/u/953172?s=460&v=4`, { encoding: null }, function (error, response, body) {
//         res.contentType('jpeg');
//         res.send(body);
//     });

// });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});