/**
*
*	Controlador de Gestores para manejar las peticiones http realizadas en base a los gestores
*		Son todas peticiones asyncronas 
*	Acá va a estar asociadas las peticiones http con los metodos de la base de datos
*
*/


const gestoresCtrl = {};

const Gestor = require('../models/Gestor');

// Mostrar todos los gestores
gestoresCtrl.getGestores = async (req, res) => {
	const gestores = await Gestor.find();
	res.json(gestores);
};


// Crear un gestor
gestoresCtrl.createGestor = async (req, res) => {
	console.log(req.body);
	const newGestor = new Gestor(req.body);
	await newGestor.save();
	res.json({status: 'Gestor Creado'});
};


// Mostrar un gestor de acuerdo a su id
gestoresCtrl.getGestorById = async (req, res) => {
	const gestor = await Gestor.findById(req.params.id);
	res.send(gestor);
};


// Editar un gestor de acuerdo a su id
gestoresCtrl.editGestor = async (req, res) =>{
	await Gestor.findByIdAndUpdate(req.params.id, req.body);
	res.json({status: 'Gestor Actualizado'});
};


// Eliminar un gestor de acuerdo a su id
gestoresCtrl.deleteGestorById = async (req, res) => {
	await Gestor.findByIdAndDelete(req.params.id);
	res.json({status: 'Gestor Deleted'});
};

gestoresCtrl.addNotes = async (req, res) => {
	await Gestor.findById(req.params.id);
	res.json({status: 'Notes Added Succesfully'});
}

gestoresCtrl.addPhone = async (req, res) => {
	await Gestor.update(req.params.id, {'phone': req.params.phone});
	res.json({status: 'Phone updated'});
}
// This function will be use to search for gestores matching the search string
gestoresCtrl.searchGestor = async (req, res) => {
	const gestor = await Gestor.find(req.params.id);
	res.json(gestor);
}

module.exports = gestoresCtrl;