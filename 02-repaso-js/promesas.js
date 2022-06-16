
const empleados = [
    { 
        id: 1,
        nombre: 'Fernando'
    },
    { 
        id: 2,
        nombre: 'Linda'
    },
    { 
        id: 3,
        nombre: 'Karen'
    },
]

const salarios = [
    { 
        id: 1,
        salario: 1000
    },
    { 
        id: 2,
        salario: 1500
    },
]

//Se tomó la función de getEmpleado del callbackHell y se transformó a una promesa 
const getEmpleado = ( id, callback ) => {
    //find es una función propia de los arreglos que permite buscar por la condición pasada como callback
    
    // viene por defecto con js desde ecmascript 6
    // ejecuta dentro del cuerpo de la promesa el callback
    return new Promise(( resolve, reject ) => {
        //resolve y reject son ambos callbacks, resolve es para terminar la promesa si todo sale bien.
        //reject es qué hacer si algo falla, ej: empleado no existe.
        
        const empleado = empleados.find( (e) => e.id === id)?.nombre;

        /* if ( empleado ) {
            resolve ( empleado );
        } else {
            reject( `No existe empleado con id ${ id }`);
        } */

        ( empleado ) 
            ? resolve ( empleado )
            : reject( `No existe empleado con id ${ id }`);
        });

    // En lugar de retornar la promesa en una ctte se retorna directamente desde la instanciación
    // return promesa;
}




const getSalario = () => {
    return new Promise( (resolve, reject) =>{
        const salario = salarios.find( (s) => s.id === id)?.salario;

        (salario)
        ? resolve (salario)
        : reject (`No existe salario para id ${ id }`);
    }); 
}


const id = 3;
/* En este código no se está manejando el rechazo de la promesa 
    Eso da un error Unhandled promise rejection
    Se necesita un catch
getEmpleado(id)
    .then( empleado => console.log( empleado ) ); */

    
/* getEmpleado(id)
    .then( empleado => console.log( empleado ) )
    .catch( err => console.log(err) );
getSalario(id)
    .then( salario => console.log( salario ) )
    .catch( err => console.log(err) ); */

getEmpleado ( id )
    .then( empleado => {

        getSalario(id)
            .then( salario => {
                console.log('El empleado:', empleado, 'tiene un salario de:', salario);
            })
            .catch( (err) => console.log(err))

    })
    .catch( (err) => console.log(err))