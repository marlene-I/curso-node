const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.log(err);
})

//Servir Contenido estatico 
app.use( express.static('public') )

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Marlene',
        titulo: 'Proyecto Web Server'
    })
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Marlene',
        titulo: 'Proyecto Web Server'
    })
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Marlene',
        titulo: 'Proyecto Web Server'
    })
})
app.get('*', (req, res) => {
res.sendFile(__dirname +'/public/404.html')
})


app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})