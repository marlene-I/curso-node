const deadpool= {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

const deadpool1= {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //edad: 50,
    getNombre(){ //Es equivalente a tener function y toda la pelota 
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//console.log(deadpool.getNombre());
// console.log(deadpool1.getNombre());

/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder; */
 

//En lugar de lo anterior se usa la desestructuracion
// const { nombre, apellido, poder, edad = 0} = deadpool;

// console.log(nombre, apellido, poder,  edad); // imprime 50

function imprimeHeroe( heroe ){
    const { nombre, apellido, poder, edad = 0} = heroe;
     console.log(nombre, apellido, poder,  edad); 

}
// Lo anterior es equivalente a :
function imprimirHeroe( { nombre, apellido, poder, edad = 0} ){
    // No es exactamente igual porque lo anterior es una constante, es decir no se podría hacer: 
    // nombre= 'tuvieja';
    // cosa que acá si
     console.log(nombre, apellido, poder,  edad); 

}


imprimeHeroe(deadpool);
imprimirHeroe(deadpool);


const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ h1, h2, h3 ] = heroes;

console.log(h1,h2,h3);

const herooes = ['Deadpool', 'Superman', 'Batman'];

const [ , , hh3 ] = herooes;

console.log(hh3);