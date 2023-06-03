const express = require('express');
const router = express.Router();
const assinantesController = require('../controllers/assinantesController');

router.get('/', assinantesController.listar);
router.post('/salvar', assinantesController.salvar);
router.get('/:id', assinantesController.buscarPorId);
router.get('/nome/:nome', assinantesController.buscarPorNome);
router.get('/sobrenome/:sobrenome', assinantesController.buscarPorSobreNome);
router.get('/cidade/:cidade', assinantesController.buscarPorCidade);
router.get('/status/:status', assinantesController.buscarPorStatus);
router.get('/estado/:estado', assinantesController.buscarPorEstado);
router.put('/atualizar/:id', assinantesController.atualizar);
router.delete('/:id', assinantesController.excluir);

module.exports = router;
