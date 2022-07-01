const http = require('http')


const port = 8081;
http.createServer( (req, res) => {
    /* req es la solicitud HTTP, contiene headers, etc */
    /* La response es la respuesta */

    //res.writeHead(200, {'Content-Type': 'text/plain'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'})

    const persona = {
        id : 1,
        nombre: 'Marlene'
    }

    res.write(JSON.stringify(persona))
    
    /* Escribe respuesta en texto plano */
    res.write('');

    //Finaliza la escritura de la respuesta y
    // la envia
    res.end()
})
.listen( port )


console.log("Escuchando el puerto:", port);