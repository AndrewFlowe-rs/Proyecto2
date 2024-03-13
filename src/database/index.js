//Importando módulos:
const fs = require('fs');
const path = require('path');


module.expors = {  //Modulo exportado
    loadData: (filenameJson = "products") => {  // Funcion para leer datos de un archivo JSON.
        const pathJSON = pat.join(__dirname, `./${filenameJson}.json`) //Construye la ruta completa del archivo JSON utilizando la función path.join./
        const dataJSON = fs.readFileSync(pathJSON, "utf-8");//Lee el contenido del archivo JSON en la ruta especificada
        const dataJS = JSON.parse(dataJSON);   //Convierte la cadena de texto leída del archivo JSON en un objeto de JavaScript
        return dataJS;    // Devuelve el objeto de JavaScript que representa los datos cargados desde el archivo JSON.
    },
    saveData: (data, filenameJson = "products") => { //Funcion para escribir datos en un archivo JSON
        const pathJSON = path.join(__dirname, `./${filenameJson}`);  //Construye la ruta completa del archivo JSON utilizando la función path.join
        const dataString = JSON.stringify(data, null, 3);//: Convierte el objeto de JavaScript que se va a guardar (data) en una cadena de texto JSON utilizando la función JSON.stringify
        fs.writeFileSync(pathJSON, dataString, 'utf-8');//Escribe la cadena de texto JSON (dataString) en el archivo especificado por la ruta
    },

}