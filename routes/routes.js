import express from 'express';
import user from './user.routes.js';
import login from './login.routes.js';
import agendamento from './agendamento.routes.js';


const router = express.Router();

router.use('/user', user);
router.use('/login', login);
router.use('/agendamento', agendamento);

export default router;