const express = require('express');
const router = express.Router();

const controllerTarefas = require('../controllers/tarefasController');


router.get('/', controllerTarefas.get);
router.get('/conclusao', controllerTarefas.getConclusao);
router.get('/colaborador/:autor', controllerTarefas.getAutor);
router.get('/concluido', controllerTarefas.getConcluidos);
router.get('/:id', controllerTarefas.getById);

module.exports = router;