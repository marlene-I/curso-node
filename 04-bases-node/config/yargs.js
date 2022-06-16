const  argv  = require('yargs')
        .options({'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Mostrar tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Numero límite de la tabla'
                    }
        })
        .check( (argv, options) => {
            if ( isNaN( argv.b )) {
                    throw 'La base tiene que ser número'
            }
            return true
        })
        .argv;

module.exports = argv;