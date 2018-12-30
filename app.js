const math = require('./services/math');

const request = require('request');

const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    console.log('You called ', req.query);
    res.send(`Hello!`);
});

// Math Routes:
app.get('/math/add', (req, res) => {

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(a, b);

    const result = math.add(a, b);
    const returnObj = {};
    
    returnObj.input = req.query;
    returnObj.sumString = `${a} + ${b}`;
    returnObj.sum = result;

    res.json(returnObj);
});

/* Expected response:
{
  input: {
    a: 2,
    b: 3
  },
  sumString: '2 + 3',
  sum: 5
}
*/

app.get('/math/multiply', (req, res) => {
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = parseInt(req.query.c);
    console.log(a, b, c);

    const result = math.multiply(a, b, c);
    const returnObj = {};
    
    returnObj.input = req.query;
    returnObj.productString = `${a} * ${b} * ${c}`;
    returnObj.product = result;

    res.json(returnObj);
});

/*
Expected Response:
{
  input: {
    cat: 50,
    b: 3,
    zoo: 10
  },
  productString: '50 * 3 * 10',
  product: 1500
}
*/

// Search Gif Route:
// app.get('/gif/', (req, res) => {

//     request(`https://avatars0.githubusercontent.com/u/953172?s=460&v=4`, function (error, response, body) {
//         console.log('error:', error);
//         res.contentType('jpeg');
//         res.send(body);
//     });

// });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});