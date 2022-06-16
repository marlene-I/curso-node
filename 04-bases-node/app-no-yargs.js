//Mi solucion
/* let numeroTabla = 5;

for (let i = 1; i <= 10; i++) {
     console.log('5 x 1 = '+  numeroTabla *i);
    
} */

// Solucion del curso 


const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

//Imprime los argumentos de la oconsola 
//console.log(process.argv);

//Encuentra el valor de forma posicional (base tiene que ser el primer argumento)
// Inconveniente para mandar -b 5 --base etc
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');
console.log(base);
//console.log(arg3);





//rconst base = 2;

crearArchivo( base )
    .then( nombreArchivo => console.log( nombreArchivo , 'creado'))
    .catch( err => console.log(err))
