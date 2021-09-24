const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const importData = require("./data.json")
 
router.get('/', (req, res) => {
    res.send("api");
});

router.get('/product', (req, res) => {
    res.send(importData);
})

router.get('/test', (req, res) => {
    res.json({
        'hello': 'test'
    });
});

app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);