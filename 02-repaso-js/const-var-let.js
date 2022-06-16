var nombre = 'Wolverine';

if ( true ){
   var nombre = 'Magneto';
}

console.log(nombre);

let nombre = 'Wolverine';

if ( true ){
   let nombre = 'Magneto';
    console.log(nombre);
}

console.log(nombre);

let nombre = 'Wolverine';

if ( true ){
   nombre = 'Magneto';
}

console.log(nombre);

const nombre = 'Wolverine';

if ( true ){ // Error
   nombre = 'Magneto';
}

console.log(nombre);


const nombre = 'Wolverine';

if ( true ){ // Defino constante en otro scope
   const nombre = 'Magneto';
}

console.log(nombre);



noombre = 'Wolverine';

if ( true ){ 
   noombre = 'Magneto';
}

console.log(noombre);

var noombre; //var permite inicializar después de usar, cosa e mandinga