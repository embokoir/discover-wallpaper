const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.static('static'))
app.get('/', async (req, res) => {
  if (req.query.client === 'gas') {
    console.log('gas came')
    res.send('Glitch woke up')
    return
  }
  console.log('get /')
  res.sendFile(__dirname + '/static/index.html')
})
app.listen(port, () => console.log(`Listening on ${port}`))
