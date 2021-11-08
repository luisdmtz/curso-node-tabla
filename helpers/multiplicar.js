const fs = require('fs'); //file System
const colors = require('colors');

const crearArchivo = async(base = 50, listar = false, hasta = 10) =>{
    try {
        let salida = ''; //inicializar con string vacio
     
        for(let i = 1; i<= hasta; i++){
           salida += `${base} x  ${i} = ${base * i}\n`;
        }

        if(listar){
            console.log(" TABLA DEL".green,colors.blue(base));

            console.log(salida);
        }
     
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)//ruta donde se guarda el archivo
     
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}