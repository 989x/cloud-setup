const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const importData = require("./data.json")


//new
const path = require('path'); 

const fs = require('fs');


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


router.get('/images', (req,res) => {
    // res.send(fs.readFileSync('./images/1.png'))
    fs.readFile(`./images/${req.query.image}`, 'base64', (er, image) => {
        const data = (`data:image/png;base64,${image}`);
        res.send(`<img src=${data} />`)
    })
})


app.use('/.netlify/functions/api',router);

//new
// router.use(express.static('dist'))
// router.use('/images', express.static(path.join(__dirname, 'images')))

module.exports.handler = serverless(app);