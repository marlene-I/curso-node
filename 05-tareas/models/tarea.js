const { v4 : uuidv4 } = require('uuid');
//No esta obsoleto porque sino estaria tachado

class Tarea {
    
    id = '';
    desc = '';
    completadoEn = '';

    constructor( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }

}

// Exporta por defecto.
// Esto significa que no tiene que desestructurar la Tarea
// al importarla
// Sino que llega y ya llega de tipo tarea

module.exports = Tarea;