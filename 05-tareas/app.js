
require('colors');

const { inquirerMenu, 
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar, 
        mostrarListadoChecklist} = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/database-helper');
const Tareas = require('./models/tareas');



// Para que la ejecución sea asícrona
const main = async() => {

    opt = '';
    const tareas = new Tareas();

    const tareasDB = readDB();

    if( tareasDB ) {
        // Establecer las tareas 
        tareas.cargarTareasFromArray( tareasDB );
    }
    console.clear();

    do {
        // Se está en el bucle hasta que haya respuesta del usuario
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                //Crear tarea
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
                console.log(desc);
                break;
            case '2':
                tareas.listar();
            break;
            case '3':
                tareas.listarPorCompletado(false);
            break;
            case '4':
                tareas.listarPorCompletado(true);
            break;
            case '5': // completado | pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0' ) {

                    const confirmacion = await confirmar('Seguro desea eliminar?')
    
                    if ( confirmacion ) {
                        tareas.borrarTarea( id ); 
                        console.log('Tarea borrada');
                    }
                }
            break;
        }
        saveDB(tareas.listadoArr);

        await pausa()

    } while (opt != 0);
        
}


main();