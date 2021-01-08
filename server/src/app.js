/**
*	En este archivo pondremos codigo relacionado con nuestro servidor/aplicacion
*	
*
*
*/
// Para gestionar peticiones http desde angular utilizaremos el modulo express
const express = require('express'); 

// Utilizaremos el modulo morgan para ver por consola las peticiones que le llegan a nuestro servidor https://npmjs.com/package/morgan
const morgan = require('morgan');

// Modulo cors para realizar peticiones entre diferentes puertos de nuestro servidor. Si queremos que acepte conexiones de un puerto en particular difiniriamos cors({origin: 'URL:puerto'}), entonces solo aceptaría peticiones desde las URL que hayamos definido
const cors = require('cors');

// Iniciamos el servidor
const app = express(); 

// Enviroment Variables
// Definimos variable de puerto de escucha del servidor. Si no esta definido usamos el puerto 4000
app.set('port', process.env.PORT || 4000);



// Middlewares
// Utilizamos el middleware cors (permitir conexiones dentro del mismo servidor)
app.use(cors()); 

// Utilizamos el middleware morgan (monitorear peticiones http)
app.use(morgan('dev'));

// Usamos express.json() para poder entender objetos js (recibidos en las peticiones)
app.use(express.json());

// Usamos express.urlencoded({extended:false}) para entender formularios html
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/gestores', require('./routes/gestores.routes'));


// Exportamos nuestro modulo para que pueda ser llamado desde el index.js
module.exports = app;