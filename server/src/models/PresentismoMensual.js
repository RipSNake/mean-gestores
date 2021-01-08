/*
*	Definiremos el modelo de estructura de nuestro presentismo mensual
*	
*/

const { Schema, model } = require('mongoose');
const diaHabil = require('./DiaHabil');


const presentismoMensualSchema = new Schema ({
	diasHabiles: [diaHabil]
});

module.exports = model('PresentismoMensual', presentismoMensualSchema);