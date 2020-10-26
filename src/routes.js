import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';

const router = new Router();

router.get('/', (req, res) => {
  return res
    .status(200)
    .json({ message: 'Uss Enterprise to starfleet command, were online!' });
});

router.post('/new-user', (req, res) => {
  return UserController.store(req, res);
});

router.post('/login', SessionController.store);

router.put('/update-user', AuthMiddleware, UserController.update);

export default router;
