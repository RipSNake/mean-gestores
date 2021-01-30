/*
*	Definiremos el modelo de estructura de nuestro presentismo mensual
*	
*/

const { Schema, model } = require('mongoose');
const diaHabil = require('./DiaHabil');


const presentismoMensualSchema = new Schema ({
	mes: String, // Nombre del mes
	diasHabiles: [diaHabil] // Dias del mes en forma de arreglo
});

module.exports = model('PresentismoMensual', presentismoMensualSchema);