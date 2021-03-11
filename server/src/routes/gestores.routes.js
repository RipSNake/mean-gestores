/**
*
*	Determinaremos las rutas de acceso http a nuestro controlador de gestores
*		Para ello importaremos nuestro controlador
*		Y luego asociaremos cada ruta http a la funcion deseada de nuestro controlador
*
*/

const { Router } = require('express');
const router = Router();

const gestoresCtrl = require('../controllers/gestores.controller');

// Get all Gestores
router.get('/', gestoresCtrl.getGestores);

// Create a gestor
router.post('/', gestoresCtrl.createGestor);

// Get ONE gestor
router.get('/:id', gestoresCtrl.getGestorById);

// Edit-Update one Gestor
router.put('/:id', gestoresCtrl.editGestor);

// Delete one Gestor
router.delete('/:id', gestoresCtrl.deleteGestorById);
/*
// Search for one Gestor's Name ---- As having the same structure of the find by /:id never doesn't come into play
router.get('/:string', gestoresCtrl.searchGestor);
*/
module.exports = router;