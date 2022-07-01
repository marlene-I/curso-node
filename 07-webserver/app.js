const express = require('express')
const app = express()

const port = 8081;

//Servir Contenido estatico 

app.use( express.static('templated-roadtrip') )

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('*', (req, res) => {
res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})