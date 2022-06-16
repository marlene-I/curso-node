require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear()

// Para que la ejecución sea asícrona
const main = async() => {

    console.log('Hola Mundo');

    opt = '';

    do {
        opt = await mostrarMenu();
        console.log({ opt });
        await pausa();
        
    } while (opt != 0);
        
    pausa();
        
}


main();