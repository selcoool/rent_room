const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('BACKEND CAP NHAT MOI UPDATED')
})

app.get('/sua', (req, res) => {
  res.send('sua')
})

app.get('/about', (req, res) => {
  res.send('about ')
})

app.listen(9000, () => {
  console.log(`Example app listening on port 9000`)
})