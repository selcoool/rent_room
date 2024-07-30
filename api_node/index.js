const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World Dan Chi Sua Qua')
})

app.get('/sua', (req, res) => {
  res.send('sua')
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.listen(6000, () => {
  console.log(`Example app listening on port 6000`)
})