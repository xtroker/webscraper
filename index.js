const requestFromSAO = require("./saoScraper");

//Here I am taking args from the comand line
//TODO: should validate the imput for date format and output error handling properly
/**
 * From stakoverflow 
 * El primer elemento (process.argv[0]) contiene la ruta al ejecutable de node, 
 * el segundo elemento contiene el nombre del archivo javascript en ejecución,
 * Los siguientes argumentos tienen los valores pasados por linea de comandos.
 */
const fecha = process.argv[2];
console.log(`Importando fecha ${fecha}...`)
requestFromSAO(fecha);
