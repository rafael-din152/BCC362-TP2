'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';
const YOUR_NAME = 'Rafael Diniz e Luiz Fernando'

// App
const app = express();
app.use(express.json())
app.post('/', (req, res) => {
    const { message } = req.body
    console.log(req.body)
    if(message === 'Hi'){
        var date_ob = new Date()
        let date = ("0" + date_ob.getDate()).slice(-2)
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();

        let DATA_HORA = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
        
        res.send(`Hi, I am a microservice, and I was built by ${YOUR_NAME} and  now is ${DATA_HORA}`)
    }else res.send('Server couldn\'t read the message.')
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
});