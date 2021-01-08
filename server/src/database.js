/**
*	En este archivo pondremos codigo relacionado con la conexion a 
*	nuestra base de datos.
*	
*	Para que funcione es necesario tener una instancia de mongobd corriendo en el servidor
*/

// Crearemos la base de datos con mongoose
// Requerimos el modulo mongoose
const mongoose = require('mongoose');

// Iniciamos una conexíón a la base de datos que deseamos acceder en este caso 'mean-gestores' dentro de nuestro servidor local
mongoose.connect('mongodb://localhost/mean-gestores',{
	useNewUrlParser: true, // you have to specify a port in the string connection
	useUnifiedTopology: true
	})
	.then(db => console.log('Db is connected'))
	.catch((err) => console.log(err)); // catch => to handle initial connection errors


// Connection error handlers
// connection.on() to listen to errors events after connection was stablished
mongoose.connection.on('error', err => {
	console.log(err);
})

// To listen to disconnected events with the database
mongoose.connection.on('disconnected', () => {
	console.log('MongoDB is disconnected!');
})

// Exportamos el modulo para que pueda ser llamado por index.js
module.exports = mongoose;