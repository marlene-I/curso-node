

const http = require('http');


http.createServer( (req, res ) =>{

/* 
    console.log(req);
    res.write('Hola Mundo'); */
/* 
    res.writeHead(404);

    res.write('404 | Page not found'); */

  /*   res.writeHead(200, {'Content-Type': 'text/plain'} ); */
  //res.writeHead(200, { 'Content-Type': 'application/json'} );
  res.setHeader( 'Content-Disposition', 'attachment; filename=elNombre.csv');
  res.writeHead(200, { 'Content-Type': 'application/csv'} );
 /*    const persona = {
        id: 1,
        nombre: 'Fernando'
    }
 */
//res.write( JSON.stringify(persona) );
   /*  res.write( JSON.stringify(persona) ); */

   
   res.write('id, nombre\n');
   res.write('1, Fer\n');
   res.write('2, Maria\n');
   res.write('3, Pedro\n');




    res.end();


})
.listen( 8081 );

console.log( 'Escuchando en puerto ', 8081);
console.log("noanda");