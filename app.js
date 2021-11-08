const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv =  require('./config/yargs');
                    

console.clear(); //LIMPIA MENSAJES EN CONSOLA

//ENVIAR: node app.js -b 6
//ENVIAR: node app.js -b 6 l
//ENVIAR: node app.js -b 7 -l --hasta=20 
console.log(argv);

crearArchivo( argv.b, argv.l, argv.h )
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));

  

//COMENTAR CRTL + K + C 
//DESCOMENTAR CRTL + K + U