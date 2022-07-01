const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {

    const busquedas = new Busquedas();
    
    let option = -1;
    do {
        
        option = await inquirerMenu();

        switch ( option ) {
            case 1:
                //Mostrar msj
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad( lugar );
                
                /// Buscar lugares 

                // Seleccionar el lugar 

                // Clima 

                //Mostrar resultados 

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ',);
                console.log('Lat:',);
                console.log('Lang:',);
                console.log('Temperatura:',);
                console.log('Mínima:',);
                console.log('Máxima:',);
                break;
        
            default:
                break;
        }

        if ( option !== 0 ) await pausa();
        
    } while (option != 0);

}

main()