/*
*	Definiremos el modelo de estructura de nuestro gestor mediante la generacion de 
*	un schema y un modelo.
*	
*	legajo:  nro de legajo del gestor
*	nombre:  nombre completo
*	jornada: cant de horas de su jornada
*	ingreso: horario de ingreso habitual
*	puesto:  tarea que desarrolla habitualmente
*
*
*/

const { Schema, model } = require('mongoose');

const gestorSchema = new Schema ({
	legajo: {type: Number, required: true},
	name: {type: String, required: true},
	hourShift: {type: String, required: true},
	startHour: {type: String, required: false},
	endHour: {type: String, required: false},
	position: {type: String, required: true},
	phone: {type: Number, requiered: false},
	notes: [{note: {type: String}, created: {type: Date}}]
},{
	timestamps: true,
	versionKey: false
})

module.exports = model('Gestor', gestorSchema);