const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({"Failed": "To convert temperature you will need to use 'http://localhost:3000/convert?temp=100&from=celsius&to=fahrenheit'"})
})

app.get('/convert', (req, res) => {
    let { temp, from, to } = req.query;
    temp = parseFloat(temp)
    let convertedTemp;
    console.log(typeof temp)

    if (from === 'celsius' && to === 'fahrenheit') {
        convertedTemp = (temp * (9/5)) + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        convertedTemp = (temp - 32) * (5 / 9);
    } else if (from === 'celsius' && to === 'kelvin') {
        convertedTemp = temp + 273.15;
    } else if (from === 'kelvin' && to === 'celsius') {
        convertedTemp = temp - 273.15;
    } else if (from === 'fahrenheit' && to === 'kelvin') {
        convertedTemp = (temp - 32) * (5 / 9) + 273.15;
    } else if (from === 'kelvin' && to === 'fahrenheit') {
        convertedTemp = (temp - 273.15) * (9 / 5) + 32;
    } else {
        res.send({"Error": "Please, Give the correct information"})
        return;
    }

    convertedTemp = convertedTemp.toFixed(1);
    res.send({convertedTemp});
})

app.listen(3000, () => {
    console.log("Server is listening on port: 3000");
})