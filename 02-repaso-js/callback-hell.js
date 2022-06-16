
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

const getEmpleado = ( id, callback ) => {
    //find es una función propia de los arreglos que permite buscar por la condición pasada como callback
    const empleado = empleados.find( (e) => e.id === id)?.nombre;

    if ( empleado ){
        callback(null, empleado);
    }else{
        callback( `Empleado con id ${ id } no existe`);
    }
}
/*  VERSION BASICA
const getSalario = ( id, callback ) => {

    const salario = salarios.find( (s) => s.id === id);

    if ( salario ){
        callback(null, salario);
    }else{
        callback(`Salario con id ${ id } no existe`);
    }
} */

const getSalario = ( id, callback ) => {
    //Ahora quiero solo el salario
    const salario = salarios.find( (s) => s.id === id)?.salario;

    if ( salario ){
        callback(null, salario);
    }else{
        callback(`Salario con id ${ id } no existe`);
    }
}

/* getSalario( 1, (err,salario)=> {

    if ( err ){
        console.log('Error! ');
        return console.log(err);
    }
    console.log("salario existe");
    console.log(salario);
}) */

// el callback de adentro se ejecuta para el imprimir de la función anterior.
/* getEmpleado( 3, (err,empleado) => {    VERSION BASICA
    if ( err ) {
        console.log('Error!!');
        return console.log(err);
    }
        console.log('Empleado existe!');
        console.log( empleado );

}
) */


const id = 2;

 getEmpleado( id, (err,empleado) => {    
    if ( err ) {
        console.log('Error!!');
        return console.log(err);
    }
        console.log('Empleado existe!');
        console.log( empleado );

        getSalario( id, (err,salario)=> {

            if ( err ){
                console.log('Error! ');
                return console.log(err);
            }
            console.log("El empleado: ",empleado, ' tiene un salario de: ', salario);
        })
        

}
) 