const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'Buenos Aires'];
    
    constructor() {
        // TODO leer DB si existe
    }

    async ciudad( lugar = '' ) {

        console.log('ciudad: ' , lugar);
        
        
        try {
            /// En el curso se resuelve así el fetch pero actualmente
            // salió la API fetch para node nativo
            const resp = await axios.get('https://api.openstreetmap.org/api/0.6/node/12345')
            console.log(resp.data);
            
        } catch (error) {
            console.log(error);
        }

        return []; 
    } 

}

module.exports = Busquedas;