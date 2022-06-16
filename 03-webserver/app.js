const express = require('express')
const app = express()

/* app.get('/', function (req, res) {
    res.send('Hello World')
  })
  

 */

//Cambia a funcion de flecha

app.get('/',  (req, res)  => { // Define la ruta principal
    res.send('Home World')
})

app.get('/hola',  (req, res)  => { // Express simplifica la definicion de rutas 
    res.send('Hello World bb')
})

app.get('*',  (req, res) =>  { // Express simplifica la definicion de rutas 
    res.send('404 | Page not found')
})

app.listen(8081)