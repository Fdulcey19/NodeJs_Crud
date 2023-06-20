import {Router} from 'express'

import { createUsuarios, deleteUsuarios, getUsuarios, getUsuariosId, updateUsuarios } from '../controller/Usuario.controller.js';

const router = Router();

router.get('/usuarios', getUsuarios)
router.get('/usuarios/:_id', getUsuariosId)
router.post('/usuarios', createUsuarios)
router.put('/usuarios/:_id', updateUsuarios)
router.delete('/usuarios/:_id', deleteUsuarios)

export default router