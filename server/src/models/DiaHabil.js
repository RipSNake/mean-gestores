/**
*	Generamos el model de un dia habil normal
*
*	dia: date -- la fecha ( Ejemplo: 22/10/1972 )
*	jornada: horario de apertura y cierre
*	gestores: los gestores que trabajan ese día [arreglo con los IDs]
*
*/

const { Schema, model } = require('mongoose');

const diaHabilSchema = new Schema ({
	dia: {type: Date, required: true},
	jornada: {inicio: {type: Date}, fin: {type: Date}},
	gestores: {[{type: Number, required: true}]} // Store only the ids 
});

module.exports = model('DiaHabil', diaHabilSchema);