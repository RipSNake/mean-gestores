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
	dia: Date,
	jornada: {inicio: {type: Date}, fin: {type: Date}}, // Start and final hour of the journal
	gestores: [
		{
		type: Schema.Types.ObjectId,
		ref: 'Gestor'
		}
	] // Store only the ids of the gestores
});

module.exports = model('DiaHabil', diaHabilSchema);