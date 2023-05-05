const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
<<<<<<< Updated upstream
  res.send('Popo is my babez')
=======
  res.send('Tommy')
>>>>>>> Stashed changes
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})