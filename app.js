const express = require('express');
const app = express()
const gots = require('./routes/gotRoutes')

app.use(express.json())
app.use('/gots', gots)

app.get('/', (req, res) => {
    res.send('Hello Ned')
})

module.exports = app