const http = require('http')


const port = 8081;
http.createServer( (req, res) => {
    /* req es la solicitud HTTP, contiene headers, etc */
    /* La response es la respuesta */
    res.write('Hola Mundo');

    res.end()
})
.listen( port )


console.log("Escuchando el puerto:", port);