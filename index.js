const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})