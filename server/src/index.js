/**
*	
* Este es el archivo principal de nuestro projecto y el que se
*	va a encargar de lanzar nuestra aplicación
*
*/

// Requirimos el archivo que se encarga de iniciar nuestro servidor
const app = require('./app');

// Requerimos nuestra base de datos
require('./database');


// Iniciamos la escucha de peticiones en el puerto 3000
app.listen(app.get('port'));

console.log('Server on port', app.get('port'));

console.log('App Max Listeners',app.getMaxListeners());
