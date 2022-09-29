const express = require("express");

const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({name: 'Christian', age: 20, country: 'Guatemala'})
})

app.post('/metas', (request, response) => {
    response.status(200).json(['Programming', 'Cooking', 'Esports'])
})

app.patch('/metas', (request, response) => {
    response.status(200).json(['Working as a frontend dev', 'Working for international companies'])
})

app.put('/business', (request, response) => {
    response.status(200).json(['Oowlish', 'Elaniin', 'Showwcase'])
})

app.listen(8000, () => {
    console.log('Server started at port 8000')
})