const Tarea = require("./tarea");


class Tareas {

    // Se maneja como objeto y no como arreglo porque
    // si se hiciese como arreglo habría que ocuparse
    // de mantener los índices, etc
    _listado = {
    };

    get listadoArr() { 

        const listado = [];
        Object.keys(this._listado).forEach(
            key => {
                const tarea = this._listado[key];
                listado.push( tarea )
            })

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea( id = '' ) {
        delete this._listado[id];
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray ( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listar() {

        this.listadoArr.forEach( (tarea,index) => {

            const id = `${index+1}.`.green
            const estado = (tarea.completadoEn) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${id} ${tarea.desc} :::::: ${estado}`);
        })
    }

    listarPorCompletado( completada = false ) {

        this.listadoArr.forEach( ( tarea, index ) => {
            const id = `${index+1}.`.green

            if((tarea.completadoEn != null) == completada)
                  console.log(`${id} ${tarea.desc}`) // En el curso se imprime la fecha si estan completadas 
                  
        })
    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString
            }
        });

        this.listadoArr.forEach( tarea => {
            
            if( !ids.includes(tarea.id) ) { 
                this._listado[tarea.id].completadoEn = null
            }


        })

        
    }
    
}   





module.exports = Tareas;