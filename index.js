const express = require('express')
const app = express()
const port = 3000

const mw = (req, res, next) => {
  console.log('mw middleware..');
  next();
};

app.get('/', mw, (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})