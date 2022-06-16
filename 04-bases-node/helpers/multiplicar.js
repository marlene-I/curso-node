const fs = require("fs");
const colors = require('colors')

//Pide parámetro por defecto = 5
/* const crearArchivo = ( base = 5 ) => {
    return new Promise ( (resolve, reject) => {
        let salida = "";

        console.log("================================");
        console.log(`Tabla del ${base}`);
        console.log("================================");
    
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
    
        }
    
        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
    
            console.log(`Se creo tabla-${base}.txt`);
            resolve ( `tabla-${base}.txt` )
        })

        
    
        console.log("logging salida ");
        console.log(salida);
    })
    
} */

const crearArchivo = async (base = 5, listar, h=10) => {
    try {
        //Se tiene que crear otro string para la salida porque sino se rompe la tabla en los archivos
        let salida = "";
        let log = "";

        for (let i = 1; i <= h; i++) {
            salida += `${base} x `+`${i}`+` = `+`${base * i}`+`\n`;
            log += `${base} x `+`${i}`.red+` = `+`${base * i}`.blue+`\n`;
        }

        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
        });

        if (listar == true) {
            console.log(`================================`.green);
            console.log(`       Tabla del`.green+` ${base}`.blue);
            console.log(`================================\n`.green);
            console.log(log);
        }

        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo,
};
