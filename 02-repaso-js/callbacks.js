
setTimeout(function () { //Cuerpo del callback
    console.log('HolaMundo');
}, 1000);

const getUsuarioByID = ( id, callback ) => {
    const usuario = {
        id, //No se especifica la asginación ya que es igual a una variable del mismo nombre 
        // id= id es redundante ECMA  script 6
        nombre: 'Marlene'

    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);

}

// paso callback como argumento para formatear el output
getUsuarioByID( 10 , ( {id, nombre} ) => {
    console.log(id);
    console.log(nombre.toUpperCase());
} ); 